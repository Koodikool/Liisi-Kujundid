function changeTab(button, shape) {
  for (const tabcontent of document.getElementsByClassName("tabcontent")) {
    tabcontent.hidden = true;
  }
  button.disabled = true;
  document.getElementById(shape).hidden = false;
}
