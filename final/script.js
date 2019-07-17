let appID = 'f7ee9df4b712457a78edab4465753b2a';
let units = 'imperial';
let searchMethod = 'zip';

function getSearchMethod(searchTerm) {
    if (searchTerm.length == 5 && Number.parseInt(searchTerm) + "" === searchTerm)
        searchMethod = "zip";
    else
        searchMethod = "q";
}

function searchWeather(searchTerm) {
    /* ` sending information to the server http://openweathermap.org/ */
    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appID}&units=${units}`).then(result => {
        return result.json();
    }).then(result => {
        init(result);
    })
}

function init(resultFromServer) {
    console.log(resultFromServer);


    document.getElementById('searchBtn').addEventListener('click', () => {
        let searchTerm = document.getElementById("searchInput").value;
        if (searchTerm)
            searchWeather(searchTerm);
    })

    /*

    switch (resultFromServer.weather[0].main) {
        case "Clear":
            document.body.style.backgroundImage = 'url("clear.jpeg")';
            break;

        case "Clouds":
            document.body.style.backgroundImage = 'url("cloudy.jpeg")';
            break;

        case "Rain":
            document.body.style.backgroundImage = 'url("rain.jpeg")';
            break;

        case "Drizzle":
        case "Mist":
            document.body.style.backgroundImage = 'url("clear.jpeg")';
            break;

        case "Thurderstorm":
            document.body.style.backgroundImage = 'url("storm.jpeg")';
            break;

        case "Snow":
            document.body.style.backgroundImage = 'url("snow.jpeg")';
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

    /*
    weatherIcon.src = "https://openweathermap.org/img/w/" + resultFromServer.weather[0].icon + "png";

    let resultDescription = resultFromServer.weather[0].description;
    weatherDescriptionHeader.innerText = resultDescription.charArt(0).toUpperCase() + resultDescription.slice(1);

    temperatureElement.innerHTML = Math.floor(resultFromServer.main.temp) + "&#176";
    windSpeedElement.innerHTML = "Winds at " + Math.floor(resultFromServer.wind.speed) + "m/s";
    cityHeader.innerHTML = resultFromServer.name;
    humidityElement.innerHTML = "Humidity levesl at " + resultFromServer.main.humity + "%";

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
*/
    function begin() {
        /*  const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`; */
        getdata();
    }

    function getdata() {
        const apiKey = 'f7ee9df4b712457a78edab4465753b2a';
        const city = document.getElementById('city').value;
        const countryCode = document.getElementById('countryCode').value
            /* instruction from https://openweathermap.org/current */
            /* api.openweathermap.org/data/2.5/weather?q={city name},{country code} */
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric`;
        const api = new XMLHttpRequest();
        /* from w3school.com https://www.w3schools.com/xml/xml_http.asp */
        api.open("GET", url, true);
        api.send();

        api.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                /* convert the information to JSON */
                let data = JSON.parse(this.responseText);
                console.log(data.country);
                let result = document.querySelector("#result");

                /* result begin with empty value */
                result.innerHTML = " ";
                result.innerHTML += ` <li> <h3>City: ${data.name}, ${data.sys.country}</h3> <br> 
             Temperature: ${data.main.temp} °C <br>
             Temp Min: ${data.main.temp_min} °C  -  Temp Max: ${data.main.temp_max} °C  <br>
             Weather: ${data.weather[0].main} - ${data.weather[0].description} <br>
             WindSpeed: ${data.wind.speed} <br> Pressure: ${data.main.pressure} hpa <br>
             Humity: ${data.main.humidity} % <br>
             Geo [long: ${data.coord.lon}, Lat: ${data.coord.lat}]
             </li>`;

            };
        }
    }