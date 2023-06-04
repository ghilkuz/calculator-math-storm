// Hexadecimal numbers, which contain letters, aren't displayed
// It's going to be fixed in the future :)

function decimalToBinary(number) {
    return Number(number).toString(2);
}

function decimalToHexadecimal(number) {
    return Number(number).toString(16);
}

let numeralSystemsContainer = null;
let numeralSystem = "decimal";

function createNumeralSystemsContainer() {
    if (numeralSystemsContainer) {
        document.body.removeChild(numeralSystemsContainer);
        numeralSystemsContainer = null;
        return;
    }

    numeralSystemsContainer = document.createElement("div");
    numeralSystemsContainer.id = "numeral-systems-container";

    const binaryButton = document.createElement("button");
    binaryButton.id = "binary-btn";
    binaryButton.className = "button blue";
    binaryButton.textContent = "Binary";
    numeralSystemsContainer.appendChild(binaryButton);

    const hexadecimalButton = document.createElement("button");
    hexadecimalButton.id = "hexadecimal-btn";
    hexadecimalButton.className = "button blue";
    hexadecimalButton.textContent = "Hexadecimal";
    numeralSystemsContainer.appendChild(hexadecimalButton);

    document.body.appendChild(numeralSystemsContainer);
}

function handleBinaryClick() {
    if (currentValue !== "" && !isNaN(parseFloat(currentValue[currentValue.length - 1]))) {
        numeralSystem = "binary";
        currentValue = convertToNumeralSystem(currentValue, numeralSystem);
        updateFields();
    }
}
  
function handleHexadecimalClick() {
    if (currentValue !== "" && !isNaN(parseFloat(currentValue[currentValue.length - 1]))) {
        numeralSystem = "hexadecimal";
        currentValue = convertToNumeralSystem(currentValue, numeralSystem);
        updateFields();
    }
}

function convertToNumeralSystem(value, system) {
    if (system === "binary") {
        return decimalToBinary(value);
    } else if (system === "hexadecimal") {
        return decimalToHexadecimal(value);
    } else {
        return value;
    }
}

document.getElementById("to-numeral-systems-btn").addEventListener("click", function () {
    createNumeralSystemsContainer();
});

document.addEventListener("click", function (event) {
    const target = event.target;

    if (target.id === "binary-btn") {
        handleBinaryClick();
    } else if (target.id === "hexadecimal-btn") {
        handleHexadecimalClick();
    }
});