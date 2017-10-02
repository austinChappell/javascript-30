const sounds = document.querySelectorAll('audio');
const keys = document.querySelectorAll('.key');

console.log(sounds);
console.log(keys);

document.addEventListener('keydown', (evt) => {
  sounds.forEach((sound) => {
    if (sound.dataset.key == evt.keyCode) {
      if (!sound.paused) {
        console.log('paused');
        sound.pause();
        sound.currentTime = 0;
      }
      sound.play();
      sound.classList.add('playing');
    }
  })
  keys.forEach((key) => {
    if (key.dataset.key == evt.keyCode) {
      key.classList.add('playing');
      setTimeout(() => {
        key.classList.remove('playing');
      }, 100);
    }
  })
});
