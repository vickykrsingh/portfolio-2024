import React, { useState, useEffect } from "react";
import { RxExternalLink } from "react-icons/rx";
// import pdf1 from '../assets/certificatesPdf/gpt-bkc.pdf'
// import pdf2 from '../assets/certificatesPdf/intern.pdf'
// import pdf3 from '../assets/certificatesPdf/REPORT-DOCX-VNA-final.pdf'
// import pdf4 from '../assets/certificatesPdf/vicky-kumar-resume.pdf'

const allCertificates = [
  {
    id:1,
    href:'https://drive.google.com/file/d/1crILYPEGXpXcZf5kccEw6I6ezLMM7zoY/view?usp=sharing',
    label:'Dexterix 30+ Hour Hackathon Participation Certificate',
  },
  {
    id:2,
    href:'https://drive.google.com/file/d/1aovWzDhdTrGSVoyZkgpNOfgUC0ZzNFWq/view?usp=drive_link',
    label:'PW Skills MERN Stack Certification (1 Year)',
  },
  {
    id:3,
    href:'https://drive.google.com/file/d/1OxKrdSOVbm3cOiXxE7tsNiIRchFgEhaK/view?usp=sharing',
    label:'Oracle SQL Database Programming Certification',
  },
  {
    id:4,
    href:'https://drive.google.com/file/d/1t0ygCWTteInlxL8vu5n8z8T0QKwqNWqv/view?usp=sharing',
    label:'Bharat Intern Full Stack internship Certification',
  },
  {
    id:5,
    href:'https://drive.google.com/file/d/1cj8_sKfy5IJtPuLhiMG0PpTZmafeat1g/view?usp=sharing',
    label:'Galgotias University IoT Workshop Completion',
  },
]

const Certificates = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [pdfs, setPdfs] = useState(allCertificates);


  return (
    <div className="flex items-center justify-center min-h-auto">
      <button
        className="btn-primary"
        onClick={() => setIsDialogOpen(true)}
      >
        Certificates
      </button>

      {isDialogOpen && (
        <div className="fixed inset-0 bg-neutral-900 z-50  flex justify-center items-center">
          <div className="bg-neutral-700 rounded-lg p-6 w-full sm:w-[95%] lg:w-[60%] shadow-lg relative">
            <button
              className="absolute top-2 text-4xl right-4 text-cyan-500 hover:text-cyan-700"
              onClick={() => setIsDialogOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">Available Certificates</h2>
            <ul>
              {pdfs.map((pdf) => (
                <li key={pdf.id} className="mb-2">
                  <a
                    href={pdf.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    <div className="flex gap-2 items-center justify-start text-gray-400 text-xs md:text-sm">
                      <span className="hover:text-gray-300 hover:text-decoration-none">{pdf.label}</span>
                      <RxExternalLink/>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
