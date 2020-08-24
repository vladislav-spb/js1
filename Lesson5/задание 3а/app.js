'use strict';

const modal = document.querySelector('.text');
const closedBut = document.querySelector('.closed');
const openBut = document.querySelector('.opened');

closedBut.addEventListener('click', function() {
    modal.classList.remove('boingInUp');
    modal.classList.add('boingOutDown');
    setTimeout(function(){
        modal.classList.add('hidden');
    },1000);
});

openBut.addEventListener('click', function(){
    modal.classList.remove('boingOutDown','hidden');
    modal.classList.add('magictime','boingInUp')
});

