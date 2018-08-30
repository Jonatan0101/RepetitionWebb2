const html = document.querySelector('html');
const footPlane = document.querySelector('.footplane');
var isZoomed = false;

footPlane.addEventListener('click', function(){
    if (isZoomed){
        html.style.transform = 'scale(1)';
        isZoomed = false;
    } else {
        html.style.transform = 'scale(0.5)';
        isZoomed = true;
    }

});