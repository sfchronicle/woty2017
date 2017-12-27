require("./lib/social"); //Do not delete



var flkty = new Flickity('.slideshow', {
	prevNextButtons: false,
pagedots: false
});

var carouselStatus = document.querySelector('.carousel-status');

function updateStatus() {
  var slideNumber = flkty.selectedIndex + 1;
  carouselStatus.textContent = slideNumber + '/' + flkty.slides.length;
}
updateStatus();

flkty.on( 'select', updateStatus );
