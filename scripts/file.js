var d = new Date().getFullYear();
document.getElementById("year").innerHTML = "&copy; Juanjuan Wang," + d;

const button = document.getElementById('btn-alert');

button.addEventListener('click', function() {
  alert('Hello, World!');
});

button.addEventListener('mouseover', function() {
  button.textContent = 'Click me';
});

button.addEventListener('mouseout', function() {
  button.textContent = 'I\'m a button';
});

// Incrementing Button and if-else
const btnCounter = document.getElementById('btn-counter');
const txtCounter = document.getElementById('txt-counter');

let counter = 1;

btnCounter.addEventListener('click', function() {
  counter++;
  txtCounter.textContent = 'Number: ' + counter;

  if (counter % 2 === 0) {
    txtCounter.classList.add('even');
    txtCounter.classList.remove('odd');
  } else {
    txtCounter.classList.add('odd');
    txtCounter.classList.remove('even');
  }
});

// for Loops
const numbersList = document.getElementById('numbers');

for (let i = 0; i < 100; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
  numbersList.appendChild(listItem);
}