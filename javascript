document.getElementById('myButton').addEventListener('click', function() {
 const randomX = Math.floor(Math.random() * 500);
 const randomY = Math.floor(Math.random() * 500);

 this.style.setProperty('--random-x', randomX);
 this.style.setProperty('--random-y', randomY);

 this.style.animation = 'move 1s forwards';
});