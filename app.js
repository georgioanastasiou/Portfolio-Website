function sendMail() {
    var name = document.getElementById("name").value.trim(); // trim any leading or trailing spaces
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    // Email validation regex
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if any fields are empty
    if (!name || !email || !message) {
        alert("All fields are required.");
        return;
    }

    // Validate email format
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    var params = {
        name: name,
        email: email,
        message: message,
    };

    const serviceId = "service_dwlwnbk";
    const templateId = "template_dja8ka5";

    emailjs
        .send(serviceId, templateId, params)
        .then((res) => {
            // Clear form fields on successful send
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message was sent successfully!");
        })
        .catch((err) => {
            console.log(err);
            alert("An error occurred while sending your message. Please try again.");
        });
}
