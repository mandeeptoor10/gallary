
// Get references to the header elements
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('header nav ul li a');

// Add an active class to the clicked navigation link
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add active class to the clicked link
    this.classList.add('active');

    // Prevent the default link behavior
    event.preventDefault();
  });
});

// Get references to elements in the DOM
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('ul li img');
// Add click event listeners to each thumbnail
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', function () {
    // Get the src and alt attributes of the clicked thumbnail
    const newSrc = this.getAttribute('src');
    const newAlt = this.getAttribute('alt');
    mainImage.setAttribute('src', newSrc);
    mainImage.setAttribute('alt', newAlt);
    const caption = document.querySelector('figcaption');
    caption.textContent = newAlt;
  });
});



function downloadImage(imageUrl) {
  // Create a temporary anchor element
  var link = document.createElement('a');
  link.href = imageUrl;
  link.download = getFileNameFromUrl(imageUrl);
  
  // Trigger the click event to start the download
  link.click();
}

function getFileNameFromUrl(url) {
  // Extract the filename from the URL
  var fileName = url.substring(url.lastIndexOf('/') + 1);
  return fileName;
}

