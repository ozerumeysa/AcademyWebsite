function areYouSure() {
    let elem = document.getElementById('edit_p');
    elem.style.color = "red";
}

function analyseForm() {
    alert(document.getElementById('authorInput').value + ", " + " thank you before you submit please save it first." );
    return false;
}

function addPost() {
    let titleInput = document.getElementById('titleInput');
    let authorInput = document.getElementById('authorInput');
    let textInput = document.getElementById('textInput');
    let imageInput = document.getElementById('inputImage');

    let title = titleInput.value;
    let author = authorInput.value;
    let text = textInput.value;
    let image = imageInput.value;

    let post = document.createElement('div'); 

    let textLine = document.createElement('p');
    textLine.textContent = "Title: " + title + " | Author: " + author + " | Post: " + text;
    post.appendChild(textLine);

    let img = document.createElement('img');
    img.src = image;
    img.style.display = "block";
    img.style.maxWidth = "400px";
    img.style.marginTop = "10px";
    img.style.borderRadius = "10px";
    img.style.margin = "10px auto";

    post.appendChild(img);
    

    document.getElementById('blogList').appendChild(post);
    titleInput.value = "";
    authorInput.value = "";
    textInput.value = "";
    imageInput.value = "";

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

