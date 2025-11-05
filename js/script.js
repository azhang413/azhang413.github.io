// Landing page animation
const landing = document.getElementById('landing');
const glassesContainer = document.querySelector('.glasses-container');
const portfolioContent = document.querySelector('.portfolio-content');

glassesContainer.addEventListener('click', () => {
  landing.classList.add('animate');
  
  // Wait for the glasses animation to complete
  setTimeout(() => {
    landing.classList.add('fade-out');
    portfolioContent.style.display = 'block';
  }, 1500);
  
  // Remove the landing page from DOM after fade out
  setTimeout(() => {
    landing.remove();
  }, 2000);
});

// Mouse focus effect
const focusArea = document.querySelector('.focus-area');
const blurOverlay = document.querySelector('.blur-overlay');

document.addEventListener('mousemove', (e) => {
  updateBlurMask(e);
});

function updateBlurMask(e) {
  const x = e.clientX;
  const y = e.clientY;
  
  const radialGradient = `radial-gradient(circle 100px at ${x}px ${y}px, 
                         transparent 0%, 
                         transparent 100px, 
                         black 120px)`;
  
  document.querySelector('.blur-overlay').style.WebkitMask = radialGradient;
  document.querySelector('.blur-overlay').style.mask = radialGradient;
  
  document.querySelector('.focus-area').style.left = `${x}px`;
  document.querySelector('.focus-area').style.top = `${y}px`;
}

// Rotating text effect
const wrapper = document.querySelector(".words");
const CURRENT_CLASS = "current";
setInterval(() => {
  const currentWord = wrapper.querySelector("span.current");
  const nextWord = currentWord.nextElementSibling
    ? currentWord.nextElementSibling
    : wrapper.firstElementChild;
  currentWord.classList.remove(CURRENT_CLASS);
  nextWord.classList.add(CURRENT_CLASS);
  wrapper.style.setProperty("--color", nextWord.dataset.color);
}, 1500);