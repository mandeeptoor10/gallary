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