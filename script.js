function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const output = `${randomNumber} है -${randomNumber % 2 === 0 ? '"दूरुच"' : '"काग"'}`;

    
    document.getElementById("output").innerText = output;
}