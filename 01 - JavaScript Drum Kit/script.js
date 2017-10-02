const sounds = document.querySelectorAll('audio'),
      clap = sounds[0],
      hihat = sounds[1],
      kick = sounds[2],
      openhat = sounds[3],
      boom = sounds[4],
      ride = sounds[5],
      snare = sounds[6],
      tom = sounds[7],
      tink = sounds[8];

console.log(sounds);

document.addEventListener('keyup', (evt) => {
  sounds.forEach((sound) => {
    if (sound.dataset.key == evt.keyCode) {
      sound.play();
      sound.classList.add('playing');
    }
  })
});
