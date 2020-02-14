(()=>{
  //make a reference to all of the buttons

  const playButtons = document.querySelectorAll('.playButton'),
        pauseButtons = document.querySelectorAll('.pauseButton'),
        rewindButtons = document.querySelectorAll('.rewindButton'),
        audioElement = document.querySelector('audio');

  let globalPaused = false;

  //process the playButtons and add some event handling



  //play the song associated with the button (data-trackref attribute)

  function playTrack(){
    //debugger;
    //



    if(globalPaused){
      console.log('paused');
      //if our
      insertTrack();
      return;
    }

    let audioSource = this.dataset.trackref;
    audioElement.src=`audio/${audioSource}.mp3`;

    //load and play
    audioElement.load();
    audioElement.play();
  }

  function insertTrack(){
    globalPaused = false;
    audioElement.play();
  }
  function pauseTrack(){
    audioElement.pause();
    globalPaused = true;
  }
  function rewindTrack(){
    audioElement.currentTime = 0;
  }
  playButtons.forEach(button=> button.addEventListener("click", playTrack));
  pauseButtons.forEach(button=> button.addEventListener("click", pauseTrack));
  rewindButtons.forEach(button=> button.addEventListener("click", rewindTrack));
})();
