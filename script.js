const apiKey = "21887a3e5ad0c7333a805081fc4dbb05";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImg = document.querySelector(".weatherIcon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    console.log(response);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        let data = await response.json();

    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "&#8451;";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherImg.src = "./images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherImg.src = "./images/clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherImg.src = "./images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherImg.src = "./images/mist.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherImg.src = "./images/rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherImg.src = "./images/snow.png";
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
    }

};

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

//below code is used to put cursor at the end of the text in input box
searchBox.addEventListener("click", ()=>{
    searchBox.setSelectionRange(searchBox.value.length);
})
