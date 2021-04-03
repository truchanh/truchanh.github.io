let btn = document.querySelector("#change-color");
let selectValue = () => {
  return Math.floor(Math.random()*256);
}
let randomColor = function() {
  let randColor = `rgb(${ selectValue() }, ${ selectValue() }, ${ selectValue() })`;
}
btn.onclick = randomColor;
