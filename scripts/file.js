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

// Get references to the button and paragraph elements
const btnCounter = document.getElementById('btn-counter');
const txtCounter = document.getElementById('txt-counter');

// Incrementing Button and if-else
let counter = 1;

btnCounter.addEventListener('click', function() {
  counter++;
  txtCounter.textContent = 'Number: ' + counter;

  if (counter % 2 === 0) {
    txtCounter.style.color = 'blue';
  } else {
    txtCounter.style.color = 'red';
  }
});

// for Loops
const numbersList = document.getElementById('numbers');

for (let i = 0; i < 100; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
  numbersList.appendChild(listItem);
}