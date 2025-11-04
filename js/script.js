// Mouse focus effect
const focusArea = document.querySelector('.focus-area');
const blurOverlay = document.querySelector('.blur-overlay');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  
  // Update the position of the focus area
  focusArea.style.left = `${x}px`;
  focusArea.style.top = `${y}px`;
  
  // Create a square clear area in the blur overlay using CSS mask
  const size = 200; // Size of the square
  const maskStyle = `
    linear-gradient(to right,
      black,
      black ${x - size/2}px,
      transparent ${x - size/2}px,
      transparent ${x + size/2}px,
      black ${x + size/2}px,
      black
    ),
    linear-gradient(to bottom,
      black,
      black ${y - size/2}px,
      transparent ${y - size/2}px,
      transparent ${y + size/2}px,
      black ${y + size/2}px,
      black
    )
  `;
  
  blurOverlay.style.webkitMask = maskStyle;
  blurOverlay.style.mask = maskStyle;
  blurOverlay.style.mask = blurOverlay.style.webkitMask;
});

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