const sounds = document.querySelectorAll('audio');
const keys = document.querySelectorAll('.key');

document.addEventListener('keydown', (evt) => {
  // This stops an open hi-hat sound if a close hi-hat sound is trigerred
  if (evt.keyCode == sounds[1].dataset.key && !sounds[3].paused) {
    sounds[3].pause();
    sounds[3].currentTime = 0;
  }
  sounds.forEach((sound) => {
    if (sound.dataset.key == evt.keyCode) {
      if (!sound.paused) {
        console.log('paused');
        sound.pause();
        sound.currentTime = 0;
      }
      sound.play();
      sound.classList.add('playing');
      keys.forEach((key) => {
        if (key.dataset.key == evt.keyCode) {
          key.classList.add('playing');
          setTimeout(() => {
            key.classList.remove('playing');
          }, 100);
        }
      })
    }
  })
});
