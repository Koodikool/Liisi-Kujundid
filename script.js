function changeTab(shape) {
  for (const tabcontent of document.getElementsByClassName("tabcontent")) {
    tabcontent.hidden = true;
  }
  document.getElementById(shape).hidden = false;
}
