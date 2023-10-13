document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const nextButton = document.getElementById('next');
    playButton.addEventListener('click', () => {
        musicPlayer.play();
      });
      pauseButton.addEventListener('click', () => {
        musicPlayer.pause();
      });
      stopButton.addEventListener('click', () => {
        musicPlayer.pause();
        musicPlayer.currentTime = 0;
      });
      // Load a song into the music player.
musicPlayer.src = 'song.mp3';