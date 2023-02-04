/**
 * EmailJS
 * Used code from Sending Emails Using EmailJS tutorial by Code Institute
 * 
 */
const EMAILJS_KEY = "service_lo01bwk";
const EMAILJS_TEMPLATE = "game-suggestion-template";
let submitButton = document.querySelector('#submit-button');
submitButton.disabled = false;
let formSubmitted = document.querySelector('#form-submit');
let sendIdea = document.querySelector('#send-idea');

function sendMail(contactForm) {   
    emailjs.send(EMAILJS_KEY, EMAILJS_TEMPLATE, {
        from_name: contactForm.name.value,
        message: contactForm.message.value,
        from_email: contactForm.emailaddress.value,
    }).then(onSuccess, onError);
    return false; // To block from loading a new page
}

function onSuccess(response) {
    // create the text 'Idea submitted - thank you!'
    formSubmitted.textContent = "Idea submitted!";
    sendIdea.reset();
    submitButton.disabled = true;
}

function onError(error) {
    formSubmitted.textContent = "Submission failed!";
    sendIdea.reset();
    submitButton.disabled = true;
}
