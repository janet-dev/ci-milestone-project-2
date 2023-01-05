// EmailJS

function sendMail(contactForm) {
    emailjs.send("service_lo01bwk", "game-suggestion-template", {
        from_name: contactForm.name.value,
        message: contactForm.message.value,
        from_email: contactForm.emailaddress.value,
    })
        .then(
            function(response) {
                console.log("SUCCESS", response.status, response.text);
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
        return false; // To block from loading a new page
}