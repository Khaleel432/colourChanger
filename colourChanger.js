function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Select a colour word from an array of colours
function colourFromArray() {
    const colours = ["white","silver","gray","black","red","maroon","yellow","olive","lime","green","aqua","teal","blue","navy","fuchsia","purple"];
    const randomNum = Math.floor(Math.random() * 15);
    const randomColour = colours[randomNum];
    document.body.style.background = randomColour;
    document.getElementById("displayText").innerHTML = `Background Colour: ${randomColour}`;
}

//Generate a random colour using Math.floor() and Math.random()
async function randomColour() {
    const seconds = 0.5;
    for(let i = 0; i< 15; i++) {
        let randomColour = "#" + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.background = randomColour;
        console.log(`Waiting for ${seconds} seconds.`);
        await sleep(i * 1000);
    }
}