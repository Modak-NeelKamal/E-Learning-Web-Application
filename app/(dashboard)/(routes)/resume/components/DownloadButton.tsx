"use client";

import { jsPDF } from "jspdf";

interface ResumeData {
  name: string;
  role: string;
  company: string;
  period: string;
  description: string;
  institution: string;
  degree: string;
  skills: string;
}

interface DownloadButtonProps {
  formData: ResumeData;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ formData }) => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    // Add content to the PDF
    doc.text("Resume", 105, 10, { align: "center" });

    doc.text(`Name: ${formData.name}`, 10, 30);
    doc.text(`Role: ${formData.role}`, 10, 40);

    doc.text(`Company: ${formData.company}`, 10, 50);
    doc.text(`Period: ${formData.period}`, 10, 60);
    doc.text(`Description: ${formData.description}`, 10, 70);

    doc.text(`Institution: ${formData.institution}`, 10, 80);
    doc.text(`Degree: ${formData.degree}`, 10, 90);

    doc.text(`Skills: ${formData.skills}`, 10, 100);

    // Save the PDF
    doc.save("resume.pdf");
  };

  return (
    <button
      onClick={downloadPDF}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    >
      Download PDF
    </button>
  );
};

export default DownloadButton;
