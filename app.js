function sendMail() {


    let params = {
      fname: document.getElementsByClassName("fname").value,
      lname: document.getElementsByClassName("lname").value,
      email: document.getElementsByClassName("email").value,
      message: document.getElementsByClassName("message").value,
    };

    const serviceId = "service_vpb5kx3";
    const templateId = "template_9hf65gj";

    emailjs.send(serviceId, templateId, params)
      .then(() => {
        alert("Email Sent!!");
        document.getElementById("contact-form").reset();
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message.");
      });
  }

