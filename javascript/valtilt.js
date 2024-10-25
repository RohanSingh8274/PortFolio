let tilt = document.querySelectorAll(".rounded");
VanillaTilt.init(tilt, {
  max: 3,
  speed: 500,
  scale: 1.05,
  glare: true,
  "max-glare": 0.3,
});

var theme_toggler = document.getElementById('theme-toggler');

toggleTheme(theme_toggler.checked);

theme_toggler.addEventListener('click', function(e) {
  toggleTheme(this.checked);
});

function toggleTheme(value) {
  var targets = document.querySelector('.light-mode');
  var navLogoImg = document.querySelector('.nav-logo img');


  if (value) {
    // targets.forEach(element => {
      targets.classList.add('dark-mode');
      console.log('hello');
      // Replace the image by setting a new src
      navLogoImg.src = 'assets/r-blue.png';
  }
  else {
    targets.classList.remove('dark-mode');
      navLogoImg.src = 'assets/r-purple.png';
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const educationTab = document.getElementById('education-tab');
  const experienceTab = document.getElementById('experience-tab');
  const educationTimeline = document.getElementById('education');
  const experienceTimeline = document.getElementById('experience');
  // Event listener for Education tab
  educationTab.addEventListener('click', () => {
    educationTimeline.style.display = 'block';
    experienceTimeline.style.display = 'none';
    educationTab.classList.add('qualification__active');
    experienceTab.classList.remove('qualification__active');
  });

  // Event listener for Experience tab
  experienceTab.addEventListener('click', () => {
    educationTimeline.style.display = 'none';
    experienceTimeline.style.display = 'block';
    experienceTab.classList.add('qualification__active');
    educationTab.classList.remove('qualification__active');
  });
});


// const menuToggle = document.querySelector('#mobile-menu');
// const nav = document.querySelector('.nav');

// menuToggle.addEventListener('click', function () {
//   menuToggle.classList.toggle('active');
//   nav.classList.toggle('active');
// });
