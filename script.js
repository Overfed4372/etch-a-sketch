function createOneToOneBox () {
    const box = document.createElement('div');
    box.setAttribute('style' , `height: 16px; width: 16px; flex: 0 0 auto; box-sizing: border-box ;border: 1px solid #3882f6`);
    box.setAttribute('class', 'one-to-one-box');
    return box;
}

const mainBoxFrame = document.querySelector('.sixteen-to-16-box');
for (let column = 1 ; column <= 30 ; column++) {
    for (let row = 1 ; row <= 30 ; row ++) {
        let littleBox = createOneToOneBox() ; 
        mainBoxFrame.appendChild(littleBox);
    }
} 