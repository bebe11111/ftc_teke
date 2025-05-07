"use strict"

document.querySelector('#nav-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('closed');
});

document.querySelectorAll('.nav-option').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('closed');
});