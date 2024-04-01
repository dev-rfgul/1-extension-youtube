document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.getElementById('playButton');
  
    playButton.addEventListener('click', function() {
      chrome.tabs.create({ url: 'https://www.youtube.com/?autoplay=1' });
    });
  });
  