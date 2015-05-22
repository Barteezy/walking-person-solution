var img = document.getElementById('image'),
    dir = 2;

var animatePerson = function () {
  var left = parseInt(img.style.left) || 0;
  if(left >= parseInt(window.innerWidth - img.width)){
    dir = -2;
    img.classList.toggle('flip');
  }
  if (left <= 0) {
    dir = 2;
    img.classList.toggle('flip');
  }
  img.style.left = left + dir + 'px';
};

setInterval(animatePerson, 20);
