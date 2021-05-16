// LIFE PANELS

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
};
// END OF LIFE PANELS

// NAV
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const navList = document.querySelector('.nav-list');
  const navItem = document.querySelectorAll('.nav-list li');

  //TOGGLE NAV
  burger.addEventListener('click', () => {
    navList.classList.toggle('nav-active');
    // BURGER ANIMATION
    burger.classList.toggle('toggle');
  });
  // CLOSE NAVBAR ON LI CLICK
  for (let i = 0; i < navItem.length; i++) {
    let closeNav = navItem[i];

    closeNav.addEventListener('click', () => {
      if (navList.classList.contains('nav-active')) {
        navList.classList.toggle('nav-active');
      }
      //TOGGLE HAMBURGER
      if (burger.classList.contains('toggle')) {
        burger.classList.toggle('toggle');
      }
    });
  }
}
navSlide();
// END OF NAV