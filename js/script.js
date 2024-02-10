let colorMode = "black";
let hueSliderValue = 0;

const game = document.querySelector(".etch-a-sketch");
const resetButton = document.querySelector("#reset");
const blackMode = document.querySelector("#black");
const colorfulMode = document.querySelector("#colorful");
const selectColorMode = document.querySelector("#select-color");
const hueSlider = document.querySelector("#hue");

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
                box.style.backgroundColor = getColor();
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

function getHSL(hue) {
    const saturation = getRandomInt(0, 101);
    const lightness = getRandomInt(0, 101);
    return `hsl( ${hue}, ${saturation}%, ${lightness}%)`
}

function getColor() {
    if (colorMode === "black") {
        return "black";
    } else if (colorMode === "colorful") {
        return getRandomHSL();
    } else if (colorMode === "select-color") {
        return getHSL(hueSliderValue);
    }
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

blackMode.addEventListener("click", () => {
    colorMode = "black";
})

colorfulMode.addEventListener("click", () => {
    colorMode = "colorful";
})

selectColorMode.addEventListener("click", () => {
    colorMode = "select-color";
})


hueSlider.addEventListener("input", () => {
    hueSliderValue = hueSlider.value;
})