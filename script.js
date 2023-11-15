const apikey = "903d3a2e2ca8d8815dcf020edb7ae113";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".input"); 
const searchBtn = document.querySelector(".button");
const weatherIcon = document.querySelector(".weather_icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

        
    if (data.weather[0].main == "clouds"){
            weatherIcon.src = "./clouds.png";
        }
        else if(data.weather[0].main == "clear"){
            weatherIcon.src = "./clear.png";
        }
        else if(data.weather[0].main == "Rain"){
             weatherIcon.src = "./rain.png"; 
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "./drizzle.png"; 
       }
       else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "./mist.png"; 
    }         
    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    }


    
searchBtn.onclick = function (){
    checkWeather(searchBox.value);
}