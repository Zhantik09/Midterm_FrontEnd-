const shapeElement = document.querySelector('.shape');
const shapeSelector = document.getElementById('shapeSelector');
const sizeInput = document.getElementById('sizeInput');
const resetButton = document.getElementById('resetButton');

shapeElement.onclick = changeColor;
shapeSelector.onchange = changeShape;
sizeInput.onchange = changeSize;
resetButton.onclick = resetShape;

function changeColor() {
    const randomColor = getRandomColor();
    shapeElement.style.backgroundColor = randomColor;
}


//either quill or compass
function changeShape() {
    const selectedShape = shapeSelector.value;
    shapeElement.style.borderRadius = selectedShape === 'quill' ? '50%' : '0';
}


function changeSize() {
    const newSize = sizeInput.value + 'px';
    shapeElement.style.width = newSize;
    shapeElement.style.height = newSize;
}

function resetShape() {
    shapeElement.style.backgroundColor = '#d2b48c';
    shapeElement.style.borderRadius = '0';
    shapeElement.style.width = '100px';
    shapeElement.style.height = '100px';
    shapeSelector.value = 'square';
    sizeInput.value = '';
}

function getRandomColor() {
    const colors = ['#b8860b', '#cd853f', '#daa520', '#8b4513', '#a52a2a']; 
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
