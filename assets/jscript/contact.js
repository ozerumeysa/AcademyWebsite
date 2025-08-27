function sendMail() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    alert("Submitted");


    const mailToLink = `mailto:${email}?subject=${subject}&body=${message}`;

    window.location.href = mailToLink;

    return false;
}

function hello() {

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
