(() => {
  const refs = {
    openMenulBtn: document.querySelector('[data-modal-open]'),
    closeMenulBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
