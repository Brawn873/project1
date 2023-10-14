document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const nextButton = document.getElementById('next'3);
 
    function playSong() {
        audio.play();
      }
    //   playButton.addEventListener('click', playSong);

 
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



const songUrls = [
    'song1.mp3',
    'song2.mp3',
    'song3.mp3',
];

let currentSongIndex = 0;

nextButton.addEventListener('click', () => {
    currentSongIndex++;

    if (currentSongIndex >= songUrls.length) {
        currentSongIndex = 0;
    }

    audio.src = songUrls[currentSongIndex];
    audio.play();
});