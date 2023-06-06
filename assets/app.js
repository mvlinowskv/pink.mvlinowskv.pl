/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.scss in this case)
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';

const btn = document.querySelector('.btn-menu')

const nav = document.querySelector('nav')

document.addEventListener('click', function(e) {
    if(e.target.closest('.btn-menu')) {
        nav.style.right = 0;
        nav.style.transition = 'right 0.4s ease-out';
    } else {
        nav.style.right = '-100vw';
        nav.style.transition = 'right 0.4s ease-out';
    }
})


/* cookie */


let cookie_btn = document.querySelector('.btn__cookie--accept')
let section_cookie = document.querySelector('.cookies')

if(cookie_btn != null) {
    if(document.cookie !== 'consent_cookie=accepted'){
        cookie_btn.addEventListener('click', function() {

            section_cookie.classList.add('cookies__bottom')
            document.cookie = "consent_cookie=accepted";
        })

        document.querySelector('.btn__cookie--deny').addEventListener('click', function(e) {
            window.history.back();
        })

    } else {
        section_cookie.classList.add('cookies__none')
        section_cookie.classList.remove('cookies__bottom')
    }
}



