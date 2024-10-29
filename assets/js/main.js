var imageSelected =Array.from(document.querySelectorAll('.card-image img')) ;
var viewImage = document.querySelector('.view-image-gallery')
var cancelViewImage = document.getElementById('cancel');
var rowContainer = document.getElementById('rowContainer')
var imageActive = 0;

// Show image in tha view Modal
/* for (var i = 0; i < imageSelected.length; i++) {
  imageSelected[i].addEventListener('click', function(e) {
    var selectedImage = e.target.getAttribute('src');
    viewImage.classList.replace('d-none', 'd-grid');
    viewImage.firstElementChild.style.backgroundImage = 'url(.'+ selectedImage;
    imageActive = e.target.closest('.card-image').dataset.imageIndex;
  }); 
} */

  // Event delegation function   Show image in tha view Modal
rowContainer.addEventListener('click', function(e) {
  var clickedElement = e.target.closest('.card-image');
  if (clickedElement) {
    viewImage.classList.replace('d-none', 'd-grid');
    var selectedImage = clickedElement.querySelector('img').getAttribute('src')
    viewImage.firstElementChild.style.backgroundImage = 'url(.'+ selectedImage +' )';
    imageActive = clickedElement.dataset.imageIndex;
  }
  
});

// Start Close view modal by clicking outside or pressing escape key
/* cancelViewImage.addEventListener('click', function(e) {
  closeModal()
});
viewImage.addEventListener('click', function(e) {
  if (e.target == e.currentTarget ) {
    closeModal()
  }
}) */

function closeModal() {
  viewImage.classList.replace('d-grid', 'd-none');

}
// End Close view modal by clicking outside or pressing escape key


//change view image by left arrow and right arrow and close modal by ESC key
document.addEventListener('keydown', function(e) {
  if (viewImage.classList.contains('d-grid')) {
    if (e.key == 'ArrowRight') {
      changeViewImage('next')
    } else if (e.key == 'ArrowLeft') {
    changeViewImage('previous')
  } else if (e.key == 'Escape') {
    viewImage.classList.replace('d-grid', 'd-none');
  }
  
  }
});

// change view image by click icon right 
/* cancelViewImage.nextElementSibling.addEventListener('click', function(e) {
  changeViewImage('next')
}) */
// change view image by click icon left 
/* cancelViewImage.previousElementSibling.addEventListener('click', function() {
  changeViewImage('previous')
}); */

function changeViewImage(element) {
  if(element == 'next') {
    imageActive = (imageActive + 1) % imageSelected.length;
  } else if(element == 'previous') {
    imageActive = (imageActive - 1 + imageSelected.length) % imageSelected.length;
  }
  viewImage.firstElementChild.style.backgroundImage = 'url(.'+ imageSelected[imageActive].getAttribute('src');

}


// Event delegation function
viewImage.addEventListener('click', function(e) {
  if (e.target == cancelViewImage.nextElementSibling ) {
    changeViewImage('next')
  } else if (e.target == cancelViewImage.previousElementSibling) {
    changeViewImage('previous')
  } else if (e.target == cancelViewImage || e.target == e.currentTarget){
    closeModal()
  }
});