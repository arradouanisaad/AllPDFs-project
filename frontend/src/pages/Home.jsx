
import "./../styles/Home.css";

const pdfTools = [
  {
    title: "Merge PDF",
    description: "Combine multiple PDF files into one document.",
    icon: "files",
    color: "red",
    path: "/merge",  },
  {
    title: "Split PDF",
    description: "Extract pages or split into multiple files.",
    icon: "scissors",
    color: "blue",
    path: "/split-pdf",
  },
  {
    title: "Compress PDF",
    description: "Reduce file size while keeping good quality.",
    icon: "minimize",
    color: "green",
    path: "/compress-pdf",
  },
  {
    title: "Convert PDF",
    description: "Convert PDF to and from other formats (Word, Excel, JPG, etc.).",
    icon: "refresh-cw",
    color: "purple",
    path: "/convert-pdf",
  },
  {
    title: "Organize PDF",
    description: "Reorder, rotate, delete or insert pages.",
    icon: "layers",
    color: "orange",
    path: "/organize-pdf",
  },
  {
    title: "Rotate PDF",
    description: "Rotate pages in your PDF file.",
    icon: "rotate-cw",
    color: "cyan",
    path: "/rotate-pdf",
  },
  {
    title: "PDF to Word",
    description: "Convert PDF documents to editable Word files.",
    icon: "file-text",
    color: "indigo",
    path: "/pdf-to-word",
  },
  {
    title: "Images to PDF",
    description: "Combine images into a single PDF file.",
    icon: "image",
    color: "pink",
    path: "/images-to-pdf",
  },
];

const steps = [
  {
    number: "1",
    icon: "cloud-upload",
    title: "Upload your files",
    description: "Select files from your device or drag and drop.",
  },
  {
    number: "2",
    icon: "settings",
    title: "Choose your tool",
    description: "Pick the PDF tool you need and set your options.",
  },
  {
    number: "3",
    icon: "zap",
    title: "Process",
    description: "Our backend handles the heavy lifting.",
  },
  {
    number: "4",
    icon: "download",
    title: "Download",
    description: "Get your result instantly and safely.",
  },
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">YOUR PDF WORKSPACE</span>

          <h1>
            All your <span>PDF tools</span> in one place
          </h1>

          <p className="hero-subtitle">
            Merge, split, compress, convert and more.
            Fast, secure and easy to use.
          </p>

          <div className="hero-benefits">
            <div className="benefit">
              <div className="benefit-icon secure">✓</div>
              <div>
                <strong>100% Secure</strong>
                <small>Your files are safe</small>
              </div>
            </div>

            <div className="benefit">
              <div className="benefit-icon fast">ϟ</div>
              <div>
                <strong>Fast Processing</strong>
                <small>Powered by FastAPI</small>
              </div>
            </div>

            <div className="benefit">
              <div className="benefit-icon cloud">☁</div>
              <div>
                <strong>No Installation</strong>
                <small>Works in your browser</small>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />

          <div className="floating-file floating-file-one">▤</div>
          <div className="floating-file floating-file-two">W</div>
          <div className="floating-file floating-file-three">▧</div>
          <div className="floating-file floating-file-four">▤</div>

          <div className="hero-pdf">
            <span className="pdf-symbol">♧</span>
            <strong>PDF</strong>
          </div>

          <span className="visual-arrow arrow-one">↗</span>
          <span className="visual-arrow arrow-two">↻</span>
          <span className="visual-arrow arrow-three">↔</span>
        </div>
      </section>

      <section className="tools-section" id="pdf-tools">
        <div className="section-heading">
          <h2>PDF Tools</h2>
          <p>Choose a tool below to get started.</p>
        </div>

        <div className="tools-grid">
          {pdfTools.map((tool) => (
            <a
              className={`tool-card ${tool.color}`}
              href={tool.path}
              key={tool.title}
            >
              <div className="tool-icon">
                {tool.icon === "files" && "⇄"}
                {tool.icon === "scissors" && "✂"}
                {tool.icon === "minimize" && "↙"}
                {tool.icon === "refresh-cw" && "⟳"}
                {tool.icon === "layers" && "▤"}
                {tool.icon === "rotate-cw" && "↻"}
                {tool.icon === "file-text" && "W"}
                {tool.icon === "image" && "▧"}
              </div>

              <div className="tool-copy">
                <h3>{tool.title}</h3>
                <p>{tool.description}</p>
              </div>

              <span className="tool-arrow">→</span>
            </a>
          ))}
        </div>
      </section>

      <section className="how-section">
        <div className="how-heading">
          <h2>How it works</h2>
          <p>Get your PDF done in just a few clicks.</p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step" key={step.number}>
              <div className="step-top">
                <span className="step-number">{step.number}</span>
                <span className="step-icon">
                  {step.icon === "cloud-upload" && "⇧"}
                  {step.icon === "settings" && "⚙"}
                  {step.icon === "zap" && "ϟ"}
                  {step.icon === "download" && "↓"}
                </span>
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
