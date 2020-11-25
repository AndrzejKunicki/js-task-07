const textRef = document.querySelector('#text');
const inputRef = document.querySelector('#font-size-control');
textRef.setAttribute("style", `font-size: ${inputRef.value}px`)

inputRef.addEventListener('input', () => {
    textRef.setAttribute("style", `font-size: ${inputRef.value}px`)
})
