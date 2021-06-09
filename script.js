function changeTab(button, shape) {
  for (const tabbutton of document.getElementsByClassName("tabbutton")) {
    tabbutton.disabled = false;
  }
  for (const tabcontent of document.getElementsByClassName("tabcontent")) {
    tabcontent.hidden = true;
  }
  button.disabled = true;
  document.getElementById(shape).hidden = false;
  document.getElementById("Perimeter").innerHTML = "";
  document.getElementById("Area").innerHTML = "";
}
function err() {
  document.getElementById("Perimeter").innerHTML = "VIGA";
  document.getElementById("Area").innerHTML = "VIGA";
}
function triangle() {
  const side1 = parseFloat(document.getElementById("TriangleSide1").value);
  const side2 = parseFloat(document.getElementById("TriangleSide2").value);
  const side3 = parseFloat(document.getElementById("TriangleSide3").value);
  if (isTriangle(side1, side2, side3)) {
    document.getElementById("Perimeter").innerHTML = trianglePerimeter(side1, side2, side3);
    document.getElementById("Area").innerHTML = triangleArea(side1, side2, side3);
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
function triangleArea(side1, side2, side3) {
  const halfPerimeter = trianglePerimeter(side1, side2, side3) / 2;
  return Math.sqrt(halfPerimeter * (halfPerimeter - side1) * (halfPerimeter - side2) * (halfPerimeter - side3));
}
function parallelogram() {
  const angle = parseFloat(document.getElementById("ParallelogramAngle").value);
  const side1 = parseFloat(document.getElementById("ParallelogramSide1").value);
  const side2 = parseFloat(document.getElementById("ParallelogramSide2").value);
  if (isParallelogram(angle, side1, side2)) {
    document.getElementById("Perimeter").innerHTML = parallelogramPerimeter(side1, side2);
    document.getElementById("Area").innerHTML = parallelogramArea(angle, side1, side2);
  } else {
    err();
  }
}
function isParallelogram(angle, side1, side2) {
  return angle > 0 && angle < Math.PI && side1 > 0 && side2 > 0;
}
function parallelogramPerimeter(side1, side2) {
  return 2 * (side1 + side2);
}
function parallelogramArea(angle, side1, side2) {
  return Math.sin(angle) * side1 * side2;
}
function circle() {
  const radius = parseFloat(document.getElementById("CircleRadius").value);
  if (isCircle(radius)) {
    document.getElementById("Perimeter").innerHTML = circlePerimeter(radius);
    document.getElementById("Area").innerHTML = circleArea(radius);
  } else {
    err();
  }
}
function isCircle(radius) {
  return radius > 0;
}
function circlePerimeter(radius) {
  return 2 * Math.PI * radius;
}
function circleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}
