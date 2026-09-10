function parler(lettre) {
  const audio = new Audio('a.mp3');
  audio.play().catch(error => {
    console.warn('Audio playback prevented by browser:', error);
  });
}
