document.querySelector('button').addEventListener('click', function () {
  fetch('https://api.nasa.gov/planetary/apod?api_key=OJ71LvksZR08lKLtvlo6Ff9fVpgAcSkqCXxLjR3D')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById('apodImage').src = data['url'];
      document.getElementById('apodImage').alt = data['title'];
    })
    .catch(error => console.error('Error:', error));
}, false);
