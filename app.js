// Skapar konstanter för att använda senare
const html = document.querySelector('html');

const modalOpen = document.querySelector('#modal-open');
const modal = document.querySelector('.modal');
const loading = document.querySelector('#loading-icon');
const trackLink = document.querySelector('#track-link');



var modalShow;

//Tar fram när man trycker på knappen
console.log(modalShow);
modalOpen.addEventListener('click', function(){
    if (modalShow = true) { // Om det fungerar ska detta alltid hända
        html.style.cursor = 'wait';
        modal.classList.remove('hidden');
        modalShow = true;
        setTimeout(function(){ // Fördröjer denna kod med 3.5 sekunder för att det ska verka som att något händer i bakgrunden
            loading.classList.add('hidden');
            trackLink.classList.remove('hidden');
            html.style.cursor = 'default';
        }, 3500);
    } else {
        console.log(':(')
    }

});