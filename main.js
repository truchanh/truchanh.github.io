let btn = document.querySelector("#change-color");
let txt = document.querySelector("h1");//Hello World
let selectValue = () => {
  return Math.floor(Math.random()*256);
}
let randomColor = function() {
  let randColor = `rgb(${selectValue()},${selectValue()},${selectValue()})`;
  txt.style.color = randColor;
}
btn.onclick = randomColor;
