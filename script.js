function createOneToOneBox () {
    const box = document.createElement('div');
    box.setAttribute('style' , `height: 16px; width: 16px; flex: 0 0 auto; box-sizing: border-box ;border: 1px solid #e0e0e0`);
    box.setAttribute('class', 'one-to-one-box');
    return box;
}

const allBoxes = [];
const mainBoxFrame = document.querySelector('.sixteen-to-16-box');
for (let column = 1 ; column <= 30 ; column++) {
    for (let row = 1 ; row <= 30 ; row ++) {
        const littleBox = createOneToOneBox();
        allBoxes.push(littleBox);
        mainBoxFrame.appendChild(littleBox);
    }
} 
allBoxes.forEach ( (box) => {
    box.addEventListener('mouseover' , (event) => {
        event.target.style.backgroundColor = 'black';
    });
}  );
