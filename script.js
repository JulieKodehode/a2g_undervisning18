// TASK:
// 1. Create a constant variable that retrives the HTML element with ID inputData
// and log the variable to the console to verify correct retrival.

const inputData = document.querySelector("#inputData");
console.log(inputData);

// 2. Create a constant variable that retrives the HTML element with ID submitData
// and log the variable to the console to verify correct retrival.

const submitData = document.querySelector("#submitData");
console.log(submitData);

// 3. Create a function with name displayData
// and log a string saying "Im working" to the console

// 6. Create a variable called inputDataValue that uses the variable inputData with the .value method.
// Add a log logging out the variable inputDataValue inside of the function.

function displayData() {
    console.log("Im working");
    
    const inputDataValue = inputData.value;
    console.log(inputDataValue);
};

// 4. Use the variable submitData and add an event listener, listening for a click and activating the function displayData

submitData.addEventListener("click", displayData);