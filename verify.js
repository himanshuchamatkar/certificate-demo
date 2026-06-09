import { db } from "./firebase-config.js";

import {
    doc,
    getDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const params =
    new URLSearchParams(window.location.search);

const certId = params.get("id");

const result =
    document.getElementById("result");

const certificateRef =
    doc(db, "certificates", certId);

const certificateSnap =
    await getDoc(certificateRef);

if (certificateSnap.exists()) {

    const data =
        certificateSnap.data();

    result.innerHTML = `
        <h2>✅ Valid Certificate</h2>

        <p><b>Student:</b>
        ${data.student_name}</p>

        <p><b>Course:</b>
        ${data.course_name}</p>

        <p><b>Status:</b>
        ${data.status}</p>
    `;

} else {

    result.innerHTML =
        "<h2>❌ Certificate Not Found</h2>";
}