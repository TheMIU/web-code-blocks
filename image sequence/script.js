const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 88; // image count
const currentFrame = index => (
  `img_seq/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(1);
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
img.onload = function () {
  drawCenteredImage(img);
}

const drawCenteredImage = (image) => {
  const x = (canvas.width - image.width) / 2; 
  const y = (canvas.height - image.height) / 2; 
  context.drawImage(image, x, y); 
}

const updateImage = index => {
  img.src = currentFrame(index);
  img.onload = function () {
    drawCenteredImage(img);
  }
}

window.addEventListener('scroll', () => {
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()