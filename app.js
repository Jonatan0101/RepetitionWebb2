const html = document.querySelector('html');
const footPlane = document.querySelector('#footplane');

const modalOpen = document.querySelector('#modal-open');
const modal = document.querySelector('.modal');
const loading = document.querySelector('#loading-icon');
const trackLink = document.querySelector('#track-link');

var isZoomed = false;

var modalShow = false;

footPlane.addEventListener('click', function(){
    if (isZoomed){
        html.style.transform = 'scale(1)';
        modalOpen.classList.remove("hidden");
        isZoomed = false;
    } else {
        html.style.transform = 'scale(0.5)';
        modalOpen.classList.add("hidden");
        isZoomed = true;
    }

});
console.log(modalShow);
modalOpen.addEventListener('click', function(){
    if (modalShow = true) {
        
        modal.classList.remove('hidden');
        modalShow = true;
        setTimeout(function(){
            loading.classList.add('hidden');
            trackLink.classList.remove('hidden');
        }, 3000);
    } else {
        console.log(':(')
    }

});