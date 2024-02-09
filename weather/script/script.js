let latitude, longitude;
let search_location;

function start() {
  navigator.geolocation.getCurrentPosition(success, error);
}

function success(prop) {
  latitude = prop.coords.latitude;
  longitude = prop.coords.longitude;
  const apiKey = "30965510cee5b46366685980ce2d5a25";
  const weather_current = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  fetch(weather_current)
  .then((response) => {
      let data = response.json();
      return data;
    }) 
    .then((data) => {
      document.getElementById("alert").setAttribute("style", "display:none");
      document.getElementById( "cityname").textContent = `Weather of ${data.name}`;

      document.getElementById("current_tem").textContent = `${eval((data.main.temp - 273.15).toFixed())}`;
      document.getElementById("min_temperature").textContent = `min-temperature is: ${eval((data.main.temp_min - 273.15).toFixed())}c`;
      document.getElementById("max_temperature").textContent = `max-temperature is: ${eval((data.main.temp_max - 273.15).toFixed())}c`
      document.getElementById("feels_like").textContent = `feels-like: ${eval((data.main.feels_like - 273.15).toFixed())}c`;

      document.getElementById("wind_speed").textContent = `wind speed: ${eval( (data.wind.speed * 18)/5).toFixed()} km/h`;
      document.getElementById("current_wind").textContent = `${eval((data.wind.speed * 18)/5).toFixed()}`;
      document.getElementById("wind_deg").textContent = `wind deg: ${data.wind.deg}`;
      // document.getElementById('wind_gust').textContent = `wind gust: ${data.wind.gust}`

      document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
      document.getElementById("pressure").textContent = `pressure: ${data.main.pressure}md`;
      document.getElementById("clouds").textContent = `Clouds: ${data.weather[0].description}`;
    });
  
fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`)
 .then((response)=>{
  let data = response.json()
  return data
 }).then((data)=>{
    document.getElementById('card_header').textContent = data.list[1]
 })

  document.querySelectorAll(".list_city").forEach((ele, index)=>{
    let list_city = ele.textContent;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${list_city}&appid=${apiKey}`)
      .then((response) => {
        let data = response.json();
        return data;
      })
      .then((data)=>{
        let temparature = eval(data.main.temp - 273.15).toFixed();
        let humidity = data.main.humidity;
        let wind_speed = eval((data.wind.speed * 18) / 5).toFixed();

        document.getElementById(`temparature${index}`).textContent = `${temparature} c`;
        document.getElementById(`wind${index}`).textContent = `${wind_speed} km/hr`;
        document.getElementById(`hum${index}`).textContent = `${humidity} %`;

        ele.addEventListener("click",() => {
          let select_url = `https://api.openweathermap.org/data/2.5/weather?q=${ele.textContent}&appid=${apiKey}`;
          fetch(select_url)
            .then((search_response) => {
              let search_data = search_response.json();
              return search_data;
            })
            .then((search_data) => {
              document.getElementById("cityname").textContent = `Weather of ${search_data.name}`;
              document.getElementById("current_tem").textContent = `${eval((search_data.main.temp - 273.15).toFixed())}`;
              document.getElementById("min_temperature" ).textContent = `min-temperature is: ${eval((search_data.main.temp_min - 273.15).toFixed())}c`;
              document.getElementById("max_temperature").textContent = `max-temperature is: ${eval((search_data.main.temp_max - 273.15).toFixed())}c`;
              document.getElementById( "feels_like").textContent = `feels-like: ${eval((search_data.main.feels_like - 273.15).toFixed())}c`;
              document.getElementById("wind_speed").textContent = `wind speed: ${eval((search_data.wind.speed * 18) / 5).toFixed()} km/h`;
              document.getElementById("current_wind").textContent = `${eval((search_data.wind.speed * 18) / 5).toFixed()}`;
              document.getElementById("wind_deg").textContent = `wind deg: ${search_data.wind.deg}`;
              // document.getElementById('wind_gust').textContent = `wind gust: ${data.wind.gust}`
              document.getElementById("humidity").textContent = `Humidity: ${search_data.main.humidity}%`;document.getElementById("pressure").textContent = `pressure: ${search_data.main.pressure}md`;
              document.getElementById("clouds").textContent = `Clouds: ${search_data.weather[0].description}`;
            })
            .catch((reject) => {
              console.log("data not found");
            });
        });
      });
  });


}
function error() {
  alert("please allow access location");
}

document
  .getElementById("search_location").addEventListener("change", (event) => {
    search_location = event.target.value;
  });

document.getElementById("search_btn").addEventListener("click", (event) => {
  event.preventDefault();
  if (search_location == undefined || search_location == "") {
    console.log("Enter city name");
  } else {
    let city = search_location;
    let ApiKey = "16a38d83af836c90ee6837bcc746a9d6";
    const search_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`;
    fetch(search_url)
      .then((search_response) => {
        let search_data = search_response.json();
        return search_data;
      })
      .then((search_data) => {
        if(search_data.name == undefined){
          document.getElementById("cityname").textContent = "Data not found" 
        }
        else{
          document.getElementById("cityname" ).textContent =`Weather of ${search_data.name}`
        }
        

        document.getElementById("current_tem").textContent = `${eval(
          (search_data.main.temp - 273.15).toFixed()
        )}`;
        document.getElementById(
          "min_temperature"
        ).textContent = `min-temperature is: ${eval(
          (search_data.main.temp_min - 273.15).toFixed()
        )}c`;
        document.getElementById(
          "max_temperature"
        ).textContent = `max-temperature is: ${eval(
          (search_data.main.temp_max - 273.15).toFixed()
        )}c`;
        document.getElementById("feels_like").textContent = `feels-like: ${eval(
          (search_data.main.feels_like - 273.15).toFixed()
        )}c`;

        document.getElementById("wind_speed").textContent = `wind speed: ${eval(
          (search_data.wind.speed * 18) / 5
        ).toFixed()} km/h`;
        document.getElementById("current_wind").textContent = `${eval(
          (search_data.wind.speed * 18) / 5
        ).toFixed()}`;
        document.getElementById(
          "wind_deg"
        ).textContent = `wind deg: ${search_data.wind.deg}`;
        // document.getElementById('wind_gust').textContent = `wind gust: ${data.wind.gust}`

        document.getElementById(
          "humidity"
        ).textContent = `Humidity: ${search_data.main.humidity}%`;
        document.getElementById(
          "pressure"
        ).textContent = `pressure: ${search_data.main.pressure}md`;
        document.getElementById(
          "clouds"
        ).textContent = `Clouds: ${search_data.weather[0].description}`;
      })
      .catch((reject) => {
        document.getElementById("alert").setAttribute("style", "display:flex")
       
        
        setTimeout(() => {
          document
            .getElementById("alert")
            .setAttribute("style", "display:none"); },3000);  
      });
    document.getElementById("search_location").value = "";
    search_location = undefined;
  }
});



