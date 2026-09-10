function parler(lettre) {
  // Backticks are key here (typically found on the key under Esc or key 7 on AZERTY keyboards)
  const audio = new Audio(`sons/${lettre}.mp3`);
  
  audio.play().catch(error => {
    console.error('Playback error:', error);
  });
}
