// Simulating content loading delay
setTimeout(() => {
    // Show content and hide loader after 2 seconds
    document.querySelector('.content').style.display = 'block';
    document.querySelector('.loader-wrapper').style.display = 'none';
  }, 2000);
  