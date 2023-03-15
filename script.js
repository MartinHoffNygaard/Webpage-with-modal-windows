'use strict';

//Creating variables to store classes in html file for easy access later.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

// Function that closes the modal and hides the overlay.
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Function that opens the modal and show the overlay
const openModal = function () {
  modal.classList.remove('hidden'); // Removes the hidden class from modal which show the modal.
  overlay.classList.remove('hidden'); // Removes the hidden class from the overlay which show the overlay.
};

// Loop that iterates over each of the three buttons. Calls the openModal function when button is clicked
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}

//Adds the closeModal function to the "x" in the modal.
btnCloseModal.addEventListener('click', closeModal);

//Adds the function closeModal to when someone click outside the modal window.
overlay.addEventListener('click', closeModal);
