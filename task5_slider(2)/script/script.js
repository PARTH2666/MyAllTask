let n = 0;
let images;
let file_obj_length;

document.getElementById("nav").style.display = "none";
document.getElementById("img").style.display = "none";

const inputElement = document.getElementById("selected_files");
inputElement.addEventListener("change", handleFiles);
function handleFiles(event) {
  images = event.target.files;

  //   for (let i in images) {
  //     console.log(images[i].name);
  //   }

  file_obj_length = event.target.files.length;
}

document.getElementById("btn").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("form").style.display = "none";
  document.getElementById("img").style.display = "block";
  document.getElementById("nav").style.display = "block";

  document
    .getElementById("dispaly_img")
    .setAttribute("src", "./assets/img/" + images[0].name);
});

document.getElementById("next_img").addEventListener("click", () => {
  n += 1;
  if (n > file_obj_length - 1) {
    n = 0;
  }

  document
    .getElementById("dispaly_img")
    .setAttribute("src", "./assets/img/" + images[n].name);
});

document.getElementById("prev_img").addEventListener("click", () => {
  n -= 1;

  if (n < 0) {
    n = file_obj_length - 1;
  }
  document
    .getElementById("dispaly_img")
    .setAttribute("src", "./assets/img/" + images[n].name);
});



