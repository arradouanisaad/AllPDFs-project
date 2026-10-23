
import { useState } from "react";
import "../styles/MergePDF.css";



export default function MergePDF() {
    const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");

  function handleFilesChange(event) {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles((previousFiles) => [...previousFiles, ...selectedFiles]);
    setError("");
    event.target.value = "";
  }

  function removeFile(indexToRemove) {
    setFiles((previousFiles) =>
      previousFiles.filter((_, index) => index !== indexToRemove)
    );
  }
  async function handleMerge() {
    if (files.length < 2) {
      setError("Please select at least two PDF files.");
      return;
    }
  
    setLoading(true);
    setError("");
  
    try {
      const formData = new FormData();
  
      files.forEach((file) => {
        formData.append("files", file);
      });
  
      const response = await fetch("http://localhost:8000/merge-pdf", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.detail || "Failed to merge PDFs.");
      }
  
      const pdfBlob = await response.blob();
      const downloadUrl = URL.createObjectURL(pdfBlob);
      const link = document.createElement("a");
  
      link.href = downloadUrl;
      link.download = "merged.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
  
      URL.revokeObjectURL(downloadUrl);
    } catch (err) {
      setError(err.message || "Could not connect to the backend.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="merge-page">
      <div className="merge-container">
        <span className="merge-label">PDF TOOL</span>
        <h1>Merge PDF files</h1>
        <p className="merge-description">
          Combine multiple PDF files into one document in seconds.
        </p>

        <div className="merge-upload-box">
          <div className="merge-icon">PDF</div>
          <h2>Select your PDF files</h2>
          <p>Choose at least two PDF files to combine.</p>

          <label className="merge-select-button">
            Select PDF files
            <input
              type="file"
              accept=".pdf,application/pdf"
              multiple
              onChange={handleFilesChange}
              hidden
            />
          </label>
        </div>

        {error && <p className="merge-error">{error}</p>}

        {files.length > 0 && (
          <div className="merge-file-list">
            <div className="merge-list-heading">
              <h2>Selected files ({files.length})</h2>
              <button
                className="merge-clear-button"
                onClick={() => setFiles([])}
                type="button"
              >
                Clear all
              </button>
            </div>

            {files.map((file, index) => (
              <div className="merge-file-item" key={`${file.name}-${index}`}>
                <span className="merge-file-icon">PDF</span>
                <div className="merge-file-info">
                  <strong>{file.name}</strong>
                  <span>{(file.size / 1024).toFixed(1)} KB</span>
                </div>
            <button
            className="merge-action-button"
            type="button"
            onClick={handleMerge}
            disabled={loading || files.length < 2}>
            {loading ? "Merging PDFs..." : "Merge PDFs"}
            </button>
              </div>
            ))}

            <button
              className="merge-action-button"
              type="button"
              disabled
              title="We will enable this after connecting the backend."
            >
              Merge PDFs — backend not connected yet
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
