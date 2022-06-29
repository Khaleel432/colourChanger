const colours = ["white","silver","gray","black","red","maroon","yellow","olive","lime","green","aqua","teal","blue","navy","fuchsia","purple"];

//Decide whether to make a gradient background or a solid background
function createBackground() {
    const isGradient = document.getElementById("isGradient").checked;
    const numOfColours = document.getElementById("numOfColours").value;
    if(!isGradient){
        colourFromArray();
    }
    else if(numOfColours<2 || numOfColours>16){
        let errorTag = document.getElementById("errorTag");
        if(numOfColours==1){
            toggleError("Cannot make a gradient with one colour. Please choose a different number.");
        }
        else{
            toggleError("Please choose a number between 1 and 16");
        }
    }
    else{
        toggleError();
        if(isGradient && numOfColours>2){
            multiGradient();
        }
        else {
            gradient();
        }
    }
    
}

function clearBackground() {
    console.log("Removing background");
    document.body.style.background = "";
    
}

function toggleError(message) {
    const error = document.getElementById("errorTag")
    if(message){
        error.innerHTML = message;
        error.style.display = "inline";
    }
    else {
        error.style.display = "none";
    }
}

function displayDropdown() {
    const isGradient = document.getElementById('isGradient').checked;
    const dropdown = document.getElementById("numOfColours");
    if(isGradient){
        dropdown.style.display = "inline";
    }
    else {
        dropdown.style.display = "none";
    }
}

//Allows for more than 2 gradients
function multiGradient() {
    const numOfColours = document.getElementById("numOfColours").value;
    let style = "linear-gradient(to right";
    let originalColours = colours.slice();
    for(let i=0;i<numOfColours;i++){
        let colourNum = Math.floor(Math.random() * originalColours.length);
        let currentColour = originalColours[colourNum];
        originalColours.splice(colourNum,1);
        style += `,${currentColour}`;
    }
    style += ")";
    document.body.style.background = style;
}

//Select two colours from the array and create a gradient
function gradient() {
    const firstColour = randomColourFromArray();
    let secondColour = randomColourFromArray();
    while(firstColour==secondColour){
        secondColour = randomColourFromArray();
    }
    document.body.style.background = "linear-gradient(to right," + firstColour + "," + secondColour + ")";
    document.getElementById("displayText").innerHTML = `Gradient: ${firstColour}/${secondColour}`;
}

//Select a colour word from an array of colours
function colourFromArray() {
    const randomColour = randomColourFromArray();
    document.body.style.background = randomColour;
    document.getElementById("displayText").innerHTML = `Background Colour: ${randomColour}`;
}

function randomColourFromArray() {
    const randomNum = Math.floor(Math.random() * 16);
    const randomColour = colours[randomNum];
    return randomColour;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}