// blur up technique

window.onload = function () {
  
  // Quit early if older browser (e.g. IE8).
  if (!('addEventListener' in window)) {
    return;
  }
  
  var img = new Image(),
      cover = document.querySelector('.cover');

  function imageLoaded() {
    cover.className += ' hires';
  };
  
  img.onLoad = imageLoaded();
  
  img.src = '/images/fa-cart-colour-large.jpg';
  
};