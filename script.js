let API_KEY = "            ";


document.getElementById("btn").addEventListener("click", searchCity);
function searchCity(){
    const city = document.getElementById("city-input").value;

    getWeatherData(city)
    .then((response) =>{
        console.log(response)
        showWeatherData(response);
    })
    .catch((err) =>{
        console.log(err)
    })
}


getWeatherData = (city) =>{
    const URL = 'https://api.openweathermap.org/data/2.5/weather';

    const Full_Url = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    const weatherPromise = fetch(Full_Url);
    console.log(Full_Url)

    return weatherPromise.then((response) => {
           return response.json();
    })
}



showWeatherData = (weatherData) => {
    var x = weatherData.name;
    if(x == undefined)
    {
        document.getElementById("city-name").innerText = x;
        document.getElementById("weather-type").innerText = '________';
        document.getElementById("temp").innerText = '';
        document.getElementById("min-temp").innerText = '';
        document.getElementById("max-temp").innerText = '';
    }
    else{
    document.getElementById("city-name").innerText = `Weather in ${x}`;
    document.getElementById("weather-type").innerText = weatherData.weather[0].main;
    document.getElementById("temp").innerText = weatherData.main.temp;
    document.getElementById("min-temp").innerText = weatherData.main.temp_min;
    document.getElementById("max-temp").innerText = weatherData.main.temp_max;
    }
    
}


