const email = document.querySelector("#email");
const emailError = document.querySelector(".error-email");
const errorIcon = document.querySelector(".icon-err");

function validateEmail(e) {
    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        e.preventDefault();
        email.focus();
        email.style.border = "2px solid hsl(0, 93%, 68%)";
        emailError.style.visibility = "visible";
        errorIcon.style.display = "block";
    } else {
        email.style.border = "1px solid hsla(0, 36%, 70%, .5)";
        emailError.style.visibility = "hidden";
        errorIcon.style.display = "none";
    }
}

function test(e) {
    if(e.keyCode == 13){
        validateEmail();
    }
}