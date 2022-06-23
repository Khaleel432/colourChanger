function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeBackgroundColour() {
    const seconds = 0.5;
    for(let i = 0; i< 15; i++) {
        let randomColour = "#" + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.background = randomColour;
        console.log(`Waiting for ${seconds} seconds.`);
        await sleep(i * 1000);
    }
}