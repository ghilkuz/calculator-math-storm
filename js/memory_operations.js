let memory = 0;

function memoryClear() {
    memory = 0;
}

function memoryAdd() {
    const currentValue = parseFloat(outputField.value);
    memory += currentValue;
}

function memorySubtract() {
    const currentValue = parseFloat(outputField.value);
    memory -= currentValue;
}

function memoryRecall() {
    currentValue = memory.toString();
    updateFields();
}

const memoryClearBtn = document.getElementById("memory-clear-btn");
const memoryAddBtn = document.getElementById("memory-add-btn");
const memorySubtractBtn = document.getElementById("memory-substract-btn");
const memoryRecallBtn = document.getElementById("memory-recall-btn");

memoryClearBtn.addEventListener("click", memoryClear);
memoryAddBtn.addEventListener("click", memoryAdd);
memorySubtractBtn.addEventListener("click", memorySubtract);
memoryRecallBtn.addEventListener("click", memoryRecall);