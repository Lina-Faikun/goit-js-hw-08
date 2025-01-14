

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  const boxes = [];

  
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10; 
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    boxes.push(box);
  }

 
  boxesContainer.append(...boxes);
}


function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; 
}


document.querySelector('[data-create]').addEventListener('click', () => {
  const inputValue = document.querySelector('input').value;
  const numberOfBoxes = parseInt(inputValue, 10);

  
  if (numberOfBoxes >= 1 && numberOfBoxes <= 100) {
    createBoxes(numberOfBoxes);
    document.querySelector('input').value = ''; 
  } else {
    alert('Please enter a number between 1 and 100');
  }
});


document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);
