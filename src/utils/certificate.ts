import jsPDF from "jspdf";
import certificateBg from "../assets/certificate-bg.png";

export function generateCertificate(
    courseName: string,
    studentName: string = "Ayush Bhosale"
) {

    const doc = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: "a4",
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const date = new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    const certificateId =
        "LT-" +
        new Date().toISOString().slice(0, 10).replace(/-/g, "") +
        "-" +
        Math.random()
            .toString(36)
            .substring(2, 8)
            .toUpperCase();

    const img = new Image();

    img.src = certificateBg;

    img.onload = () => {

        doc.addImage(
            img,
            "PNG",
            0,
            0,
            pageWidth,
            pageHeight
        );

        doc.setFont("times", "bold");
        doc.setTextColor(20, 20, 20);
        doc.setFontSize(26);

        doc.text(
            studentName.toUpperCase(),
            pageWidth / 2,
            200,
            {
                align: "center",
            }
        );

        doc.setFont("helvetica", "normal");
        doc.setFontSize(16);

        doc.text(
            courseName,
            pageWidth / 2,
            250,
            {
                align: "center",
                maxWidth: 360,
            }
        );

        doc.setFontSize(13);

        doc.text(
            date,
            157,
            306,
            {
                align: "center",
            }
        );

        doc.text(
            certificateId,
            337,
            306,
            {
                align: "center",
            }
        );

        doc.text(
            "N/A",
            503,
            306,
            {
                align: "center",
            }
        );

        doc.save("LearnTube-Certificate.pdf");

    };

}