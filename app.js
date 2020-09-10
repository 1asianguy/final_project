// ChocoChip
const openBtn = document.getElementById('openModal1');
const modal = document.getElementById('modal1');
const close = document.getElementById('close1');

const openModal = () => {
    modal.style.display = 'block';
}

openBtn.addEventListener('click', openModal);

const closeModal = () => {
    modal.style.display ='none';
}

close.addEventListener('click', closeModal);


// Ginger Men
const openBtn2 = document.getElementById('openModal2');
const modal2 = document.getElementById('modal2');
const close2 = document.getElementById('close2');

const openModal2 = () => {
    modal2.style.display = 'block';
}

openBtn2.addEventListener('click', openModal2);

const closeModal2 = () => {
    modal2.style.display ='none';
}

close2.addEventListener('click', closeModal2);


// Macaron
const openBtn3 = document.getElementById('openModal3');
const modal3 = document.getElementById('modal3');
const close3 = document.getElementById('close3');

const openModal3 = () => {
    modal3.style.display = 'block';
}

openBtn3.addEventListener('click', openModal3);

const closeModal3 = () => {
    modal3.style.display ='none';
}

close3.addEventListener('click', closeModal3);


// Fortune
const openBtn4 = document.getElementById('openModal4');
const modal4 = document.getElementById('modal4');
const close4 = document.getElementById('close4');

const openModal4 = () => {
    modal4.style.display = 'block';
}

openBtn4.addEventListener('click', openModal4);

const closeModal4 = () => {
    modal4.style.display ='none';
}

close4.addEventListener('click', closeModal4);


// Email form
const form = document.getElementById('email')

form.addEventListener('submit', (event) => {
    event.preventDefault()
})
