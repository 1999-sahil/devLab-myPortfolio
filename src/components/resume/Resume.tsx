import { useState, useEffect } from "react";

import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import pdf from "../../assets/doc/myResume.pdf";
import Download from "./Download";
import Footer from "../footer/Footer";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
function Resume() {
    const [width, setWidth] = useState(1000);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const getScale = () => {
        if (width > 1200) return 1.7;
        if (width > 768) return 1.2;
        return 0.8;
    };

    return (
        <div className="mt-[3.5rem] gridDotResume min-h-screen w-full flex flex-col gap-8 pt-6">
            <Download />
            <div className="">
                <Document file={pdf} className="flex justify-center items-center">
                    <Page pageNumber={1} scale={getScale()} />
                </Document>
            </div>
            <Download />
            <Footer />
        </div>
    )
}

export default Resume