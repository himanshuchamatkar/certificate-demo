import { db } from "./firebase-config.js";

import {
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const btn = document.getElementById("generateBtn");

btn.addEventListener("click", async () => {

    const studentName =
        document.getElementById("studentName").value;

    const courseName =
        document.getElementById("courseName").value;

    const certId =
        "CERT" + Date.now();

    await setDoc(
        doc(db, "certificates", certId),
        {
            student_name: studentName,
            course_name: courseName,
            issue_date: new Date(),
            status: "Valid"
        }
    );

    const verifyUrl =
`https://certificate-demo-eight.vercel.app/verify.html?id=${certId}`;

    document.getElementById("certificateInfo").innerHTML = `
        <h3>Certificate Created</h3>
        <p>ID: ${certId}</p>
    `;

    document.getElementById("qrcode").innerHTML = "";

    new QRCode(
        document.getElementById("qrcode"),
        verifyUrl
    );
});