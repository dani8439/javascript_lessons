'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // could do the same way by doing this, bit more tedious.
  // modal.getElementsByClassName.display = 'block';
  // instead aggregate the properties in one class that we define in css, and then we manipulate.
};

// export the same functionality to a named function so it can be used in both addEventListeners, and code is dry, more readable, more declarative and more expressive.
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// loop through the node list to show all of them.
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// now want to hide the modal window. Not calling the function though. Because it would immediately fire. Want it only fired as soon as the click event happens on the close modal button
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }

  // if (e.key === 'Escape') {
  //   if (!modal.classList.contains('hidden')) {
  //     /// need to call the function in this case to execute the code in the function
  //     closeModal();
  //   }
  // }
});
