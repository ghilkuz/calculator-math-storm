function addNumbers(a, b) { return parseFloat(a) + parseFloat(b); }
function subtractNumbers(a, b) { return parseFloat(a) - parseFloat(b); }
function multiplyNumbers(a, b) { return parseFloat(a) * parseFloat(b); }
function divideNumbers(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }

    return parseFloat(a) / parseFloat(b);
}

function handleOperationClick(operation) {
    if (currentValue !== "" && !isNaN(parseFloat(currentValue[currentValue.length - 1]))) {
        currentValue += operation;
        history += operation;
        updateFields();
    }
}

const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", () => {
    handleOperationClick("+");
});
const subtractBtn = document.getElementById("subtract-btn");
subtractBtn.addEventListener("click", () => {
    handleOperationClick("-");
});
const multiplyBtn = document.getElementById("multiply-btn");
multiplyBtn.addEventListener("click", () => {
    handleOperationClick("*");
});
const divideBtn = document.getElementById("divide-btn");
divideBtn.addEventListener("click", () => {
    handleOperationClick("/");
});

function checkResult(result) {
    if (!isNaN(parseFloat(result))) {
        currentValue = result.toString();
        updateFields();
    } else {
        currentValue = "Error";
        updateFields();
    }
}

// Reverse Polish Notation algorithm
function handleEqualsClick() {
    try {
        const outputQueue = [];
        const operatorStack = [];
        const operators = {
            "+": { precedence: 1 },
            "-": { precedence: 1 },
            "*": { precedence: 2 },
            "/": { precedence: 2 }
        };
        const tokens = currentValue.match(/(\d+(\.\d+)?|\+|\-|\*|\/)/g);
        
        if (!tokens) {
            currentValue = "Error";
            updateFields();
            return;
        }
        
        tokens.forEach(token => {
            if (!isNaN(parseFloat(token))) {
                outputQueue.push(parseFloat(token));
            } else {
                const operator = operators[token];
                while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== "(" 
                    &&operator.precedence <= operators[operatorStack[operatorStack.length - 1]].precedence) {
                    outputQueue.push(operatorStack.pop());
                }
                operatorStack.push(token);
            }
        });
        
        while (operatorStack.length > 0) { outputQueue.push(operatorStack.pop()); }
        const stack = [];
        
        outputQueue.forEach(token => {
            if (!isNaN(parseFloat(token))) {
                stack.push(token);
            } else {
                const b = stack.pop();
                const a = stack.pop();
                let result;

                switch (token) {
                    case "+":
                        result = addNumbers(a, b);
                        break;
                    case "-":
                        result = subtractNumbers(a, b);
                        break;
                    case "*":
                        result = multiplyNumbers(a, b);
                        break;
                    case "/":
                        result = divideNumbers(a, b);
                        break;
                    // case "^":
                    //     result = exponentiation(a, b);
                    //     break;
                    default:
                        throw new Error("Invalid operator");
                }
                stack.push(result);
            }
        });
        
        const result = stack.pop();
        checkResult(result);
        // history = result.toString(); //to see NaN output
        // updateFields();
    } catch (error) {
        currentValue = "Error";
        updateFields();
    }
}

function handlePercentClick() {
    const certainNumber = currentValue.split(/[-+*/]/).pop();

    if (currentValue.length === certainNumber.length) {
        currentValue = (parseFloat(certainNumber) / 100).toString();
    } else {
        const percentage = parseFloat(certainNumber) * 0.01;
        const incompleteExpression = currentValue.slice(0, -certainNumber.length);

        currentValue = incompleteExpression + (parseFloat(incompleteExpression) * percentage);
    }

    history = currentValue;
    updateFields();
}

// Percent button handling can be improved
// function handlePercentClick() {
//     const certainNumber = currentValue.split(/[-+*/]/).pop();

//     if (currentValue.length === certainNumber.length) {
//         currentValue = (parseFloat(certainNumber) / 100).toString();
//     } else {
//         const incompleteExpression = currentValue.slice(0, -certainNumber.length);
//         const lastOperator = incompleteExpression.trim().slice(-1);

//         if (lastOperator === "+" || lastOperator === "-") {
//             const percentage = parseFloat(certainNumber) / 100;
//             currentValue = incompleteExpression + (parseFloat(incompleteExpression) * percentage);
//         } else {
//             const percentage = parseFloat(certainNumber) * 0.01;
//             const incompleteExpression = currentValue.slice(0, -certainNumber.length);

//             currentValue = incompleteExpression + (parseFloat(incompleteExpression) * percentage);
//         }
//     }

//     history = currentValue;
//     updateFields();
// }

// No results are displayed after turn to a negative number
// It's going to be fixed in the future :)
function handleSignButtonClick() {
    if (currentValue !== "Error" && currentValue !== "0") {
        if (currentValue.startsWith("-")) {
            currentValue = currentValue.substr(1);
            history = history.substr(1);
        } else {
            currentValue = "-" + currentValue;
            history = "-" + history;
        }

        updateFields();
    }
}

const equalsButton = document.getElementById("equals-btn");
equalsButton.addEventListener("click", handleEqualsClick);

const percentBtn = document.getElementById("percent-btn");
percentBtn.addEventListener("click", handlePercentClick);

const signBtn = document.getElementById("sign-btn");
signBtn.addEventListener("click", handleSignButtonClick);