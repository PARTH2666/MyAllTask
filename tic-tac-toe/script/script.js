let i = 1;
let soon = 0;
let chokdi = 0;
let varialble = "";
// let match_arr = ["012", "036", "678", "258", "345", "147", "246", "048"];
let soon_arr = [];
let chokdi_arr = [];
function start() {
  document.querySelectorAll(".grid_item").forEach((ele, index) => {
    ele.addEventListener("click", (event) => {
      if (event.target.childNodes.length == 1) {
        event.target.childNodes[0].remove();
      }
      if (i % 2 == 0) {
        let soon = document.createElement("i");
        soon.classList.add("fa-regular", "fa-circle");
        event.target.append(soon);
        soon_arr.push(index);

         soon_arr.forEach((ele) => {
          console.log(ele);
        });
      } else {
        let chokdi = document.createElement("i");
        chokdi.classList.add("fa-solid", "fa-xmark");
        event.target.append(chokdi);

        chokdi_arr.push(index);
      }
      i += 1;
    });
  });
}

// console.log("hello");

// let city = "delhi";
// let API_KEY = "30965510cee5b46366685980ce2d5a25";
// fetch(
//   `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
// ).then((response) => {
//     let data = response.json()
//     return data
// }).then((data)=>{
// console.log(data);
// })


// https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}
// https://api.openweathermap.org/data/2.5/forecast?lat=LATITUDE&lon=LONGITUDE&units=metric&appid=YOUR_API_KEY


// let date = new Date();
// console.log(date);