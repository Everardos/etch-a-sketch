const game = document.querySelector(".etch-a-sketch");

function createRows(number) {
    for (let i=0; i < number; i++) {
        const row = document.createElement("div");
        game.appendChild(row);
        row.classList.add("row");
        console.log("Row: " + i);
        for (let i=0; i < number; i++) {
            const box = document.createElement("div");
            row.appendChild(box);
            box.classList.add("box");
            console.log("Box: " + i)
        }
    }
}

createRows(4);