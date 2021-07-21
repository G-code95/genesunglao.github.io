//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=f11edeb9ff4d88ed0eeaf0ebcbc06bb8&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById('description').innerHTML=weatherInfo.weather[0].description;
    document.getElementById('temp').innerHTML=weatherInfo.main.temp;
    document.getElementById('humidity').innerHTML=weatherInfo.main.humidity;
    document.getElementById('speed').innerHTML=weatherInfo.wind.speed;

 }); //end of "then" fat arrow function

