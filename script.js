function AND(input1, input2) {
    return input1 && input2;
}

function OR(input1, input2) {
    return input1 || input2;
}

function NOT(input) {
    return !input;
}

function updateColor(inputId) {
    let inputElement = document.getElementById(inputId);
    inputElement.parentElement.style.backgroundColor = inputElement.checked ? "green" : "transparent";
}

function simulate() {
    let inputA = parseInt(document.getElementById("inputA").value);
    let inputB = parseInt(document.getElementById("inputB").value);
    
    
    if (isNaN(inputA) || inputA < 0 || inputA > 1) {
        alert("Input A must be either 0 or 1.");
        return;
    }
    
    if (isNaN(inputB) || inputB < 0 || inputB > 1) {
        alert("Input B must be either 0 or 1.");
        return;
    }

    let andOutput = AND(inputA, inputB);
    let orOutput = OR(inputA, inputB);
    let notOutput = NOT(inputA); 

    // Update circle colors based on gate outputs
    document.getElementById("andCircle").className = andOutput ? "bulb on" : "bulb";
    document.getElementById("orCircle").className = orOutput ? "bulb on" : "bulb";
    document.getElementById("notCircle").className = notOutput ? "bulb on" : "bulb";
}
