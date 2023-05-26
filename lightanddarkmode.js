const buttonDarkMode = document.getElementById('buttonDarkMode');
const bgWhite = document.querySelector('body.bg-white');

function darklModeOn(){
    if(bgWhite.classList.contains('bg-white')){
        bgWhite.classList.remove('bg-white');
        bgWhite.classList.add('bg-black');
    }
}

buttonDarkMode.addEventListener('click', darklModeOn);