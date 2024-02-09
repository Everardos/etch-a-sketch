const game = document.querySelector(".etch-a-sketch");
const resetButton = document.querySelector("#reset");

function createRows(number) {
    for (let i=0; i < number; i++) {
        const row = document.createElement("div");
        game.appendChild(row);
        row.classList.add("row");
        for (let i=0; i < number; i++) {
            const box = document.createElement("div");
            row.appendChild(box);
            box.classList.add("box");
            box.addEventListener("mouseenter", () => {
                box.style.backgroundColor = getRandomHSL();
                box.style.transitionDuration = "1s";
            })
        }
    }
}

function clearRows() {
    while (game.firstChild) {
        game.removeChild(game.firstChild);
    }
}

function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomHSL() {
    const hue = getRandomInt(0, 361);
    const saturation = getRandomInt(0, 101);
    const lightness = getRandomInt(0, 101);
    return `hsl( ${hue}, ${saturation}%, ${lightness}%)`
}

function darkenHSL(string) {

}



function reset() {
    let number = parseInt(prompt("Enter size of grid: "));
    while (number > 100 || number < 2 || number === null || isNaN(number)) {
        number = parseInt(prompt("Invalid input. Enter size of grid: "));
    }
    clearRows();
    createRows(number);
}

createRows(4);

resetButton.addEventListener("click", reset);