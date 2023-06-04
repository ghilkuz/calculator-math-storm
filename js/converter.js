let conversionContainer = null;

function createConversionContainer() {
    if (conversionContainer) {
        document.body.removeChild(conversionContainer);
        conversionContainer = null;
        return;
    }
    
    conversionContainer = document.createElement("div");
    conversionContainer.id = "conversion-container";
  
    const lengthButton = document.createElement("button");
    lengthButton.id = "length-btn";
    lengthButton.className = "button blue";
    lengthButton.textContent = "Length";
    lengthButton.addEventListener("click", function() {
        convertLength();
        history = currentValue;
    });
    conversionContainer.appendChild(lengthButton);
  
    const weightsButton = document.createElement("button");
    weightsButton.id = "weights-btn";
    weightsButton.className = "button blue";
    weightsButton.textContent = "Weights";
    weightsButton.addEventListener("click", function() {
        convertWeights();
        history = currentValue;
    });
    conversionContainer.appendChild(weightsButton);
  
    const areaButton = document.createElement("button");
    areaButton.id = "area-btn";
    areaButton.className = "button blue";
    areaButton.textContent = "Area";
    areaButton.addEventListener("click", function() {
        convertArea();
        history = currentValue;
    });
    conversionContainer.appendChild(areaButton);
  
    document.body.appendChild(conversionContainer);
}  

function convertLength() {
    const value = parseFloat(outputField.value);
    const centimeters = value * 100;
    const meters = value;
    const kilometers = value / 1000;
  
    const convertedValue = `${centimeters} cm = ${meters} m = ${kilometers} km`;
    history = `${convertedValue}`;
  
    updateFields();
}
  
function convertWeights() {
    const value = parseFloat(outputField.value);
    const grams = value * 1000;
    const kilograms = value;
    const tonnes = value / 1000;
  
    const convertedValue = `${grams} g = ${kilograms} kg = ${tonnes} t`;
    history = `${convertedValue}`;
  
    updateFields();
}
  
function convertArea() {
    const value = parseFloat(outputField.value);
    const squareCentimeters = value * 10000;
    const squareMeters = value;
    const squareKilometers = value / 1000000;
  
    const convertedValue = `${squareCentimeters} cm² = ${squareMeters} m² = ${squareKilometers} km²`;
    history = `${convertedValue}`;
  
    updateFields();
}

// Test with alert
// document.getElementById("to-convert-btn").addEventListener("click", function () {
//     const conversionType = prompt("Enter conversion type: (length, weights, area)");
  
//     switch(conversionType) {
//         case "length": 
//             convertLength();
//             break;
//         case "weights": 
//             convertWeights();
//             break;
//         case "area": 
//             convertArea();
//             break;
//         default:
//             alert("Invalid conversion type!");
//             break;
//     }
// });

// const controlsContainer = document.getElementById("controls-container");

document.getElementById("to-convert-btn").addEventListener("click", function () {
    createConversionContainer();
});