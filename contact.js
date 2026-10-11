// Replace the service ID and template ID below with the client's own
// EmailJS service/template (see the publicKey placeholder in Contact.html).
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    this.dataset.handledByJs = "true";

    const params = {
        name: document.querySelector('input[name="name"]').value,
        email: document.querySelector('input[name="email"]').value,
        message: document.querySelector('textarea[name="message"]').value,
    };

    emailjs.send("REPLACE_WITH_SERVICE_ID", "REPLACE_WITH_TEMPLATE_ID", params)
        .then(function () {
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset();
        })
        .catch(function (error) {
            alert("Error: " + error.text);
            console.log(error);
        });
});
