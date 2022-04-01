const loadText = document.querySelector(".loading-text");
const backgroundPage = document.querySelector(".bg");
let load = 0;
let int = setInterval(blurring, 30);

function blurring() {
  load++;
  if (load > 100) {
    clearInterval(int);
  }
  loadText.innerHTML = `${load}%`
  loadText.style.opacity = scale(load,0,100,1,0)

  backgroundPage.style.filter = `blur(${scale(load,10,100,40,0)}px)`
}
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
