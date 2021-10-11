const submitButton = document.querySelector(".main__form");
const inputEmail = document.querySelector('[type="email"]');

submitButton.addEventListener("submit", handleClick);

function handleClick(e) {
    e.preventDefault();

    function validate(email) {
        const regex = /^\S+@\S+\.\S+$/;
        return regex.test(email);
    }
    if(validate(inputEmail.value)) {
        inputEmail.removeAttribute("id");
        inputEmail.nextElementSibling.classList.remove("error-message")
        console.log("certo");
    } else {
        inputEmail.setAttribute("id", "email--error");
        inputEmail.nextElementSibling.classList.add("error-message")
        console.log("errado");
    }

}