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

function changeText() {
    let paragraph = document.getElementById('myText');
    paragraph.textContent = "Welcome! This blog is all about different topics. Here you’ll find tips, tutorials, and stories to help you along your way.!";
    paragraph.style.margin = "20px auto"
  }



  function changeColor() {
    let paragraph = document.getElementById('myText');
    paragraph.style.color = "blue";
    paragraph.style.margin = "20px auto"

  }

  function changeFont() {
    let paragraph = document.getElementById('myText');
    paragraph.style.fontFamily = "Georgia, serif";
    paragraph.style.margin = "20px auto"

  }