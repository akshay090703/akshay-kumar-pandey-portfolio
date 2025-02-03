"use client";

import { Button } from "./ui/button";
import { Download } from "lucide-react";

export default function DownloadResumeButton() {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/resume/akshay-kumar-pandey-resume.pdf";
        link.download = "akshay-kumar-pandey-resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Button variant="link" size="lg" onClick={handleDownload} className="flex justify-center items-center gap-4 text-lg py-3">
            <Download size={24} />
            Download My Resume
        </Button>
    );
}
