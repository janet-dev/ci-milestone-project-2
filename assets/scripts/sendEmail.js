// EmailJS
// Used code from Sending Emails Using EmailJS tutorial by Code Institute

const submitButton = document.querySelector('#submit-button');
submitButton.disabled = false;

function sendMail(contactForm) {
    const formSubmitted = document.querySelector('#form-submit');
    const sendIdea = document.querySelector('#send-idea');
    
    emailjs.send("service_lo01bwk", "game-suggestion-template", {
        from_name: contactForm.name.value,
        message: contactForm.message.value,
        from_email: contactForm.emailaddress.value,
    })
        .then(
            function(response) {
                console.log("SUCCESS", response.status, response.text);
                // create the text 'Idea submitted - thank you!'
                formSubmitted.textContent = "Idea submitted!";
                sendIdea.reset();
                submitButton.disabled = true;
            },
            function(error) {
                console.log("FAILED", error);
                formSubmitted.textContent = "Submission failed!";
                sendIdea.reset();
                submitButton.disabled = true;
            }
        );
        return false; // To block from loading a new page
}