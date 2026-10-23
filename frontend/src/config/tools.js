import MergePDF from "../pages/MergePDF";
import SplitPDF from "../pages/SplitPDF";
import CompressPDF from "../pages/CompressPDF";

export const tools = [
  {
    id: "merge",
    title: "Merge PDFs",
    description: "Combine several PDF files into one.",
    path: "/merge",
    component: MergePDF,
    status: "available",
  },
  {
    id: "split",
    title: "Split PDF",
    description: "Split a PDF into several files.",
    path: "/split",
    component: SplitPDF,
    status: "coming-soon",
  },
  {
    id: "compress",
    title: "Compress PDF",
    description: "Reduce the size of a PDF.",
    path: "/compress",
    component: CompressPDF,
    status: "coming-soon",
  },
];