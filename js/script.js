const outputField = document.getElementById("output-field");
const historyField = document.getElementById("history-field");

let currentValue = "0";
let history = "";

function updateFields() {
    outputField.value = currentValue;
    historyField.value = history;
}

updateFields();

function handleDigitClick(digit) {
    if (digit === "00") {
        if (currentValue !== "0" && currentValue !== "") {
            currentValue += digit;
            history += digit;
            updateFields();
        }
    } else {
        if (currentValue === "0") {
            currentValue = digit;
        } else {
            currentValue += digit;
        }
        history += digit;
        updateFields();
    }
}

function handleResetClick() {
    currentValue = "0";
    history = "";
    updateFields();
}

function handlePointClick() {
    const lastNumber = currentValue.split(/[-+*/]/).pop();
    if (!lastNumber.includes('.')) {
        currentValue += '.';
        history += '.';
        updateFields();
    }
}

const digitButtons = document.querySelectorAll("#digits-buttons .button");
digitButtons.forEach((button) => {
    button.addEventListener("click", () => {
        handleDigitClick(button.textContent);
    });
});

const resetButton = document.getElementById("reset-btn");
resetButton.addEventListener("click", handleResetClick);

const pointBtn = document.getElementById("point-btn");
pointBtn.addEventListener("click", handlePointClick);