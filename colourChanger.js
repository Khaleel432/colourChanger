const colours = ["white","silver","gray","black","red","maroon","yellow","olive","lime","green","aqua","teal","blue","navy","fuchsia","purple"];

//Decide whether to make a gradient background or a solid background
function createBackground() {
    const isGradient = document.getElementById("isGradient").checked;
    if(isGradient){
        gradient();
    }
    else {
        colourFromArray();
    }
}

//Select two colours from the array and create a gradient
function gradient() {
    const firstColour = randomColourFromArray();
    let secondColour = randomColourFromArray();
    while(firstColour==secondColour){
        secondColour = randomColourFromArray();
    }
    console.log(`First Colour: ${firstColour} Second Colour ${secondColour}`);
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
    const randomNum = Math.floor(Math.random() * 15);
    const randomColour = colours[randomNum];
    return randomColour;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Generate a random colour every second
async function intervalChanger() {
    const seconds = 0.5; //Number of seconds between an interval
    const numOfIntervals = 15; //Number of times the colour will change
    for(let i = 0; i<numOfIntervals; i++) {
        let randomColour = "#" + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.background = randomColour;
        console.log(`Waiting for ${seconds} seconds.`);
        await sleep(i * 1000);
    }
}