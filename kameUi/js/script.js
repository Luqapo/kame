document.addEventListener('DOMContentLoaded', function() {
  console.log("Ready!");
  const forward = document.getElementById('forward');
  const stop = document.getElementById('stop');
  const left = document.getElementById('left');
  const right = document.getElementById('right');
  const heart = document.getElementById('heart');
  const fire = document.getElementById('fire');
  const skull = document.getElementById('skull');
  const hello = document.getElementById('hello');
  const punch = document.getElementById('punch');
  const dance = document.getElementById('dance');
  const home = document.getElementById('home');

  forward.addEventListener('click', () => {
    fetch('http://localhost:3000/api/forward');
  });

  stop.addEventListener('click', () => {
    fetch('http://localhost:3000/api/stop');
  });

  left.addEventListener('click', () => {
    fetch('http://localhost:3000/api/left');
  });

  right.addEventListener('click', () => {
    fetch('http://localhost:3000/api/right');
  });

  heart.addEventListener('click', () => {
    fetch('http://localhost:3000/api/heart');
  });

  fire.addEventListener('click', () => {
    fetch('http://localhost:3000/api/fire');
  });

  skull.addEventListener('click', () => {
    fetch('http://localhost:3000/api/skull');
  });

  hello.addEventListener('click', () => {
    fetch('http://localhost:3000/api/hello');
  });

  punch.addEventListener('click', () => {
    fetch('http://localhost:3000/api/punch');
  });

  dance.addEventListener('click', () => {
    fetch('http://localhost:3000/api/dance');
  });

  home.addEventListener('click', () => {
    fetch('http://localhost:3000/api/home');
  });
}, false);