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
function err() {
  document.getElementById("Perimeter").innerHTML = "VIGA";
}
function triangle() {
  const side1 = parseFloat(document.getElementById("TriangleSide1").value);
  const side2 = parseFloat(document.getElementById("TriangleSide2").value);
  const side3 = parseFloat(document.getElementById("TriangleSide3").value);
  if (isTriangle(side1, side2, side3)) {
    document.getElementById("Perimeter").innerHTML = trianglePerimeter(side1, side2, side3);
  } else {
    err();
  }
}
function isTriangle(side1, side2, side3) {
  return side1 < side2 + side3 && side2 < side1 + side3 && side3 < side1 + side2;
}
function trianglePerimeter(side1, side2, side3) {
  return side1 + side2 + side3;
}
