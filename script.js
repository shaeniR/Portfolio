function sendMail(){
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_oqfeaaa", "template_f7jwnop", parms).then(alert("Email sent successfully!"));
}