function createOneToOneBox (scale) {
    const box = document.createElement('div');
    box.setAttribute('style' , `height: ${scale}px; width: ${scale}px; flex: 0 0 auto; box-sizing: border-box ;border: 0px solid #e0e0e0`);
    box.setAttribute('class', 'one-to-one-box');
    return box;
}

function createSketch (rowAndColumnNumber = 30) {
    //The sketch size is 480*480px
    //rowAndColumnNumber is the number of squares in the row and column
    //Scale is the size of each square
    let scale = Math.floor(480 / rowAndColumnNumber);
    const allBoxes = [];
    const mainBoxFrame = document.querySelector('.sketch');
    for (let row = 1 ; row <= rowAndColumnNumber ; row++) {
        for (let column = 1 ; column <= rowAndColumnNumber ; column ++) {
            const littleBox = createOneToOneBox(scale);
            allBoxes.push(littleBox);
            mainBoxFrame.appendChild(littleBox);
        }
    }
    let mouseDown = false;

    allBoxes.forEach ( (box) => {
        box.addEventListener('mouseover' , (event) => {
            // event.target.onmousedown = () => {mouseDown = true};
            // event.target.onmouseup = () => {mouseDown = false};
            // if (!mouseDown) return
            event.target.classList.add('filled-button');
        });

    }  ); 
}

function changeTheGrid (rowAndColumnNumber) {
    const sketch = document.querySelector(".sketch");
    while (sketch.firstChild) {
        sketch.removeChild(sketch.firstChild);
    }
    createSketch (rowAndColumnNumber);
}

createSketch();
const changeTheGridButton = document.querySelector(".change-grid");
changeTheGridButton.addEventListener("click" , (event) => {
    let gridNumberInput = parseInt(prompt("Choose the grid number:" , "30"));
    //Chekc if gridNumberInput is a number
    ( !isNaN(gridNumberInput) ) && ( changeTheGrid(gridNumberInput) );
});