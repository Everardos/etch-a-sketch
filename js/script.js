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
                if (!box.style.backgroundColor) {
                    box.style.backgroundColor = randomHex();
                } else if (!box.firstChild) {
                    const alpha = document.createElement("div");
                    box.appendChild(alpha);
                    alpha.classList.add("darken");
                    alpha.style.opacity = "0.1";
                } else if (parseFloat(box.firstChild.style.opacity) < 1) {
                    let opacity = parseFloat(box.firstChild.style.opacity);
                    opacity += 0.1;
                    opacity = Math.round(opacity * 10)/10
                    box.firstChild.style.opacity = opacity.toString();
                }
            })
        }
    }
}

function clearRows() {
    while (game.firstChild) {
        game.removeChild(game.firstChild);
    }
}

function randomHex() {
    const max = 16777217; //Number of possible colors plus 1
    const num = Math.floor(Math.random() * max);
    return "#" + num.toString(16);
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