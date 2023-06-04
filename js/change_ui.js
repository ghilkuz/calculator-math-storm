var checkbox = document.querySelector('input[type="checkbox"]');

// Some styles can be combined actually
checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        document.documentElement.style.setProperty("--body-background-color", "white");
        document.documentElement.style.setProperty("--h1-color", "#343434");
        document.documentElement.style.setProperty("--main-container-background-color", "#f0f0f0");
        document.documentElement.style.setProperty("--results-container-background-color", "#f0f0f0");
        document.documentElement.style.setProperty("--history-field-background-color", "white");
        document.documentElement.style.setProperty("--history-field-color", "#343434");
        document.documentElement.style.setProperty("--output-field-background-color", "white");
        document.documentElement.style.setProperty("--output-field-color", "#343434");
        document.documentElement.style.setProperty("--button-color", "#343434");
        document.documentElement.style.setProperty("--dark-background-color", "#343434");
        document.documentElement.style.setProperty("--dark-color", "#c0c0c0");
        document.documentElement.style.setProperty("--light-background-color", "#c0c0c0");
        document.documentElement.style.setProperty("--equals-color", "#343434");
        document.documentElement.style.setProperty("--blue-color", "#343434");
        document.documentElement.style.setProperty("--conversion-container-background-color", "#f0f0f0");
        document.documentElement.style.setProperty("--numeral-systems-container-background-color", "#f0f0f0");
    } else {
        document.documentElement.style.setProperty("--body-background-color", "#343434");
        document.documentElement.style.setProperty("--h1-color", "white");
        document.documentElement.style.setProperty("--main-container-background-color", "#1f2231");
        document.documentElement.style.setProperty("--results-container-background-color", "#1f2231");
        document.documentElement.style.setProperty("--history-field-background-color", "#555a72");
        document.documentElement.style.setProperty("--history-field-color", "white");
        document.documentElement.style.setProperty("--output-field-background-color", "#555a72");
        document.documentElement.style.setProperty("--output-field-color", "white");
        document.documentElement.style.setProperty("--button-color", "#c0c0c0");
        document.documentElement.style.setProperty("--dark-background-color", "#333a63");
        document.documentElement.style.setProperty("--dark-color", "white");
        document.documentElement.style.setProperty("--light-background-color", "#555a72");
        document.documentElement.style.setProperty("--equals-color", "#343434");
        document.documentElement.style.setProperty("--blue-color", "#343434");
        document.documentElement.style.setProperty("--conversion-container-background-color", "#1f2231");
        document.documentElement.style.setProperty("--numeral-systems-container-background-color", "#1f2231");
    }
});