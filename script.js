function changeTab(button, shape) {
  for (const tabbutton of document.getElementsByClassName("tabbutton")) {
    tabbutton.disabled = false;
  }
  for (const tabcontent of document.getElementsByClassName("tabcontent")) {
    tabcontent.hidden = true;
  }
  button.disabled = true;
  document.getElementById(shape).hidden = false;
}
function triangle() {
  const side1 = document.getElementById("TriangleSide1").value;
  const side2 = document.getElementById("TriangleSide2").value;
  const side3 = document.getElementById("TriangleSide3").value;
  document.getElementById("Perimeter").innerHTML = `Külg 1: ${side1}, Külg 2: ${side2}, Külg 3: ${side3}`;
}
