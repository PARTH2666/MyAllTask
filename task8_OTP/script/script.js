// let min = 999;
// let max = 9999;
// let length, l;
// function onclick(length_otp) {
//   if (l == 1) {
//     document.getElementById("quote_container").childNodes.forEach((ele) => {
//       ele.remove();
//     });
//   }

//   let OTP = "";
//   for (let index = 0; index < length_otp; index++) {
//     OTP += Math.floor(Math.random() * 10).toString();
//   }
//   console.log(OTP);
//   quote = document.createElement("p");
//   quote.className = "quote";
//   quote.textContent = `${OTP}`;
//   document
//     .getElementById("quote_container")
//     .insertAdjacentElement("beforeend", quote);
//   l = document.getElementById("quote_container").childNodes.length;
// }

// document.getElementById("btn").addEventListener("click", function () {
//   onclick(4);
// });
// // function otnnew(length) {
// //   let otp = "";
// //   for (let index = 0; index < length; index++) {
// //     otp += Math.floor(Math.random() * 10).toString();
// //   }
// //   console.log("otp", otp);
// // }
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={APIkey}`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'APIkey': '',
// 	}
// };
// fetch(url,options).then((response)=>{
//   let data = response.json()
//   return data
// }).then((data)=>{
//   console.log(data);
// })


const apiKey = '30965510cee5b46366685980ce2d5a25'; // Replace with your actual API key
const city = 'Delhi'; // Replace with the desired city

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(weatherUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Now you can handle the weather data as needed
  })
  .catch(error => console.error('Error:', error));
