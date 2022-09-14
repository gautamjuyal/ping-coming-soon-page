const notifyBtn = document.getElementById('notify-btn');
const emailField = document.getElementById('email-field');

const mainDiv = emailField.parentElement.parentElement;

function displayError() {
    if (mainDiv.querySelector('p'))
        return;
    emailField.classList.add('error');
    const p = document.createElement('p');
    p.textContent = "Please provide a valid email address";
    p.classList.add("error-text");
    mainDiv.appendChild(p);

}

function removeError() {

    emailField.classList.remove('error');
    if (mainDiv.querySelector('p'))
        mainDiv.removeChild(mainDiv.querySelector('p'));
}

function validateEmail() {
    const inputEmail = emailField.value;
    regEx = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (!regEx.test(inputEmail)) {
        displayError();
    } else
        removeError();
}

function btnHoverHandler(event) {
    event.preventDefault();
    validateEmail();
}

notifyBtn.addEventListener('mouseover', btnHoverHandler);