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
            box.addEventListener("mouseover", () => {
                box.classList.add("hover");
            })
        }
    }
}

function clearRows() {
    while (game.firstChild) {
        game.removeChild(game.firstChild);
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