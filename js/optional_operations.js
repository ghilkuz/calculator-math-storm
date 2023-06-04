function factorialNumber(num) {
    if (num < 0) { return NaN; } 
    else if (num === 0 || num === 1) { return 1; } 
    else {
        let result = 1;

        for (let i = 2; i <= num; i++) { 
            result *= i;
        }
        return result;
    }
}

function squareRootNumber(num) {
    if (num < 0) { return NaN; } 
    else { return Math.sqrt(num); }
}

function exponentiation(base, exponent) {
    return Math.pow(base, exponent);
}

function handleFactorialClick() {
    const num = parseFloat(currentValue);
    const result = factorialNumber(num);

    history += '!';
    checkResult(result);
}

function handleSquareRootClick() {
    const num = parseFloat(currentValue);
    const result = squareRootNumber(num);

    history += '√';
    checkResult(result);
}

function handleExponentiationClick() {
    const base = parseFloat(currentValue);
    history += '^';
    updateFields();

    currentValue = "";
    updateFields();

    const equalsBtn = document.getElementById("equals-btn");
    const equalsClickHandler = () => {
        const exponent = parseFloat(currentValue);
        const result = exponentiation(base, exponent);
        checkResult(result);
        equalsBtn.removeEventListener("click", equalsClickHandler);
    };

    equalsBtn.addEventListener("click", equalsClickHandler);
}

const factorialBtn = document.getElementById("factorial-btn");
factorialBtn.addEventListener("click", handleFactorialClick);

const squareRootBtn = document.getElementById("square-root-btn");
squareRootBtn.addEventListener("click", handleSquareRootClick);

const exponentiationBtn = document.getElementById("exponentiation-btn");
exponentiationBtn.addEventListener("click", handleExponentiationClick);