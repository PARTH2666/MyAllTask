let img_number = 0;
let img_arr = [
  "./assets/img/download.jpg",
  "./assets/img/download (1).jpg",
  "./assets/img/download (2).jpg",
];

document.getElementById("display_img").setAttribute("src", img_arr[img_number]);

document.getElementById("next_img").addEventListener("click", () => {
  img_number += 1;

  if (img_number > 2) {
    img_number = 0;
  }
  document
    .getElementById("display_img")
    .setAttribute("src", img_arr[img_number]);
});

document.getElementById("prev_img").addEventListener("click", () => {
  img_number -= 1;

  if (img_number < 0) {
    img_number = 2;
  }

  document
    .getElementById("display_img")
    .setAttribute("src", img_arr[img_number]);
});
