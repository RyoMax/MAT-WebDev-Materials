document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('videoContainer').style.display = 'flex';
    var video = document.getElementById('myVideo');
    var sidebar = document.querySelector('.sidebar');
  
    video.addEventListener('loadedmetadata', function() {
      video.controls = false;
      addPauseButton();
      increaseVolume(video); // Lautstärke erhöhen
    });
  
    video.addEventListener('timeupdate', function() {
      var currentTime = video.currentTime;
      var duration = video.duration;
      var timeToShowSidebar = duration - 29; // 29 Sekunden vor dem Ende
  
      if (currentTime >= timeToShowSidebar) {
        showSidebar();
      }
    });
  
    video.addEventListener('ended', function() {
      video.controls = true;
      removePauseButton();
    });
  
    video.addEventListener('play', function() {
      showPauseButtonAndFlexbox();
    });
  
    video.play();
  });
  
  function increaseVolume(video) {
    video.volume = 1; // Lautstärke auf Maximum setzen (1)
  }
  
  function showSidebar() {
    var sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.style.display = 'block';
    }
  }
  
  function removePauseButton() {
    var pauseButtonContainer = document.getElementById('pauseButtonContainer');
    if (pauseButtonContainer) {
      pauseButtonContainer.parentNode.removeChild(pauseButtonContainer);
    }
  }
  
  function addPauseButton() {
    var pauseButtonContainer = document.getElementById('pauseButtonContainer');
    if (!pauseButtonContainer) {
      pauseButtonContainer = document.createElement('div');
      pauseButtonContainer.id = 'pauseButtonContainer';
      document.getElementById('videoContainer').appendChild(pauseButtonContainer);
    } else {
      pauseButtonContainer.innerHTML = ''; // Entfernt alle vorhandenen Inhalte
    }
  
    var pauseButton = document.createElement('button');
    pauseButton.innerText = 'Pause';
    pauseButton.id = 'pauseButton';
  
    pauseButton.addEventListener('click', function() {
      var video = document.getElementById('myVideo');
      if (video.paused) {
        video.play();
        pauseButton.innerText = 'Pause'; // Text auf Pause ändern, wenn das Video abgespielt wird
      } else {
        video.pause();
        pauseButton.innerText = 'Play'; // Text auf Play ändern, wenn das Video pausiert wird
      }
    });
  
    pauseButtonContainer.appendChild(pauseButton);
  }
  
  function showPauseButtonAndFlexbox() {
    var pauseButtonContainer = document.getElementById('pauseButtonContainer');
    var pauseFlexboxContainer = document.querySelector('.pauseContainer');
    if (pauseButtonContainer && pauseFlexboxContainer) {
      pauseButtonContainer.style.display = 'flex';
      pauseFlexboxContainer.style.display = 'flex';
    }
  }
  
  window.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myVideo');
    video.controls = false;
    video.addEventListener('loadedmetadata', function() {
      addPauseButton();
    });
  });
  
  var video = document.getElementById('myVideo');
  video.addEventListener('loadedmetadata', function() {
    video.controls = false;
    addPauseButton();
    increaseVolume(video); // Lautstärke erhöhen
  });
  
  video.addEventListener('timeupdate', function() {
    var currentTime = video.currentTime;
    var duration = video.duration;
  
    if (currentTime >= (3 * 60 + 17)) {
      document.querySelector('.banner-box').style.display = 'block';
    }
  
    if (currentTime >= (4 * 60 + 26)) {
      document.querySelector('.website-box').style.display = 'block';
    }
  
    if (currentTime >= (7 * 60 + 29)) {
      document.querySelector('.kurs-box').style.display = 'block';
    }
  
    var timeToShowSidebar = duration - 29; // 29 Sekunden vor dem Ende
  
    if (currentTime >= timeToShowSidebar) {
      showSidebar();
    }
  });
  