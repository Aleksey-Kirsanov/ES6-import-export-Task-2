import './index.css';

const cookieConsent = document.querySelector('.cookie-consent');
const cookieConsentButton = document.querySelector('.cookie-consent__button');

function deleteCookie() {
    cookieConsent.style.display = 'none';  
    localStorage.setItem('temp', true);
    
};

cookieConsentButton.addEventListener('click', deleteCookie);

window.addEventListener('storage', event => {
    console.log(event) 
    if (event.newValue == 'true') {
        cookieConsent.style.display = 'none'; 
        // console.log(123);
    }
});





