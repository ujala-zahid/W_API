const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found'
);
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city) {
       const api_key = "11bf74b4a17d592240fcf35c1d8e6404";
       const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;//templatestring.

       const weather_data = await fetch(`${url}`).then(response => response.json());                //I use fetch function,because fetch function return promises.
    //    console.log(weather_data)

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    } //cod means status code.
    //
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    //
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 215.12)}°C`;
    //
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}km/H`;

    switch(weather_data.weather[0].main){
         case 'Clouds':
            weather_img.src = "image copy.png";
            break;
        case 'Clear':
          weather_img.src = "image.png"; 
          break;
          case 'Rain':
            weather_img.src = "image copy3.png";
            break;
        case 'Mist':
          weather_img.src = "image copy2.png"; 
          break; 
          case 'Snow':
            weather_img.src = "image copy4.png";
            break;
    }









    console.log(weather_data);
}
searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});