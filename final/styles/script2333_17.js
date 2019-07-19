let appId = 'f7ee9df4b712457a78edab4465753b2a';
let units = 'imperial';
let searchMethod;

/* ` Reading the information from Search boton */
document.getElementById('searchBtn').addEventListener('click', () => {
    let searchTerm = document.getElementById("searchInput").value;
    if (searchTerm)
        searchWeather(searchTerm);
})


function getSearchMethod(searchTerm) {
    /* ` selecting Name of city or Zip number */
    if (searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
        searchMethod = 'zip';
    else
        searchMethod = 'q';
}

function searchWeather(searchTerm) {
    getSearchMethod(searchTerm);
    const url = `http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`;
    const api = new XMLHttpRequest();
    /* from w3school.com https://www.w3schools.com/xml/xml_http.asp */

    api.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            /* Console test with deiffrents commands 
            console.log(this.responseText);
            document.getElementById("demo").innerHTML = this.responseText;
            convert the information to JSON */
            let result = JSON.parse(this.responseText);
            /* console.log(result); */
            init(result);
        }
    };
    api.open("GET", url, true);
    api.send();
}

function init(resultFromServer) {
    /* ` selecting the bacground picture depending the weather information */
    switch (resultFromServer.weather[0].main) {
        case "Clear":
            document.body.style.backgroundImage = 'url("img/clear.jpeg")';
            break;

        case "Clouds":
            document.body.style.backgroundImage = 'url("img/cloudy.jpeg")';
            break;

        case "Rain":
            document.body.style.backgroundImage = 'url("img/rain1.jpeg")';
            break;

        case "Drizzle":
            document.body.style.backgroundImage = 'url("img/rain2.jpg")';
            break;

        case "Mist":
            document.body.style.backgroundImage = 'url("img/clear.jpeg")';
            break;

        case "Thurderstorm":
            document.body.style.backgroundImage = 'url("img/storm.jpeg")';
            break;

        case "Snow":
            document.body.style.backgroundImage = 'url("img/snow.jpeg")';
            break;

        default:
            break;
    }
    let weatherDescriptionHeader = document.getElementById("weatherDescriptionHeader");
    let temperatureElement = document.getElementById("temperature");
    let humidityElement = document.getElementById("humidity");
    let windSpeedElement = document.getElementById("windSpeed");
    let cityHeader = document.getElementById("cityHeader");
    let weatherIcon = document.getElementById("documentIconImg");

    /* information about the Icon weather https://openweathermap.org/img/w/ */
    weatherIcon.src = "https://openweathermap.org/img/w/" + resultFromServer.weather[0].icon + ".png";
    let resultDescription = resultFromServer.weather[0].description;
    /* the first letter of information will be Uppercase */
    weatherDescriptionHeader.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);
    /* "&#176" it is the signal to ° degrees centigrade or fahrenheit */
    temperatureElement.innerHTML = Math.floor(resultFromServer.main.temp) + "&#176";
    windSpeedElement.innerHTML = "Winds at " + Math.floor(resultFromServer.wind.speed) + "m/s";
    cityHeader.innerHTML = resultFromServer.name;
    humidityElement.innerHTML = "Humidity levels at " + resultFromServer.main.humidity + "%";

    setPositionForWeatherInfo();
}

function setPositionForWeatherInfo() {
    let weatherContainer = document.getElementById("weatherContainer");
    let weatherContainerHeight = weatherContainer.clientHeight;
    let weatherContainerWidth = weatherContainer.clientWidth;

    weatherContainer.style.left = `calc(50% - ${weatherContainerWidth/2}px)`;
    weatherContainer.style.top = `calc(50% - ${weatherContainerHeight/1.3}px)`;
    weatherContainer.style.visibility = "visible";

}