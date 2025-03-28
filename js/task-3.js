const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (handleInput) => {
    const trimmedValue = handleInput.target.value.trim();
    outputEl.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;

});

