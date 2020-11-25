const inputRef = document.querySelector('#validation-input');
let dataLength = inputRef.getAttribute("data-length")

inputRef.addEventListener('blur', event => {
    if ((event.target.value).length === Number(dataLength)) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    }
     else {
        inputRef.classList.add('invalid');
     }
});

