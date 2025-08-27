function hideUnhide() {
    let elem = document.getElementById('edit_p1');
    if(elem.hidden) {
        elem.hidden = false;
    }  else {
        elem.hidden = true;
    }
}

function darkMode() {
  let allElem = document.getElementsByTagName("*");
  const isChecked = document.getElementById("darkToggle").checked;

  for (let all of allElem) {
    if (isChecked) {
      all.style.backgroundColor = "black";
      all.style.color = "white";
    } else {
      all.style.backgroundColor = "white";
      all.style.color = "black";
    }
  }
}
