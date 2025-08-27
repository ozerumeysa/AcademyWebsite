function myMode() {
    alert('Welcome to myBlog. Click on the menu: ');
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
