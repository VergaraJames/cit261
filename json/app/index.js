const { Wheather } = require("./wheather");
const weather = new Wheather('Lima', 'Pe');

require("./json.css");

async function fetchWeather() {
    const data = await wheather.getWeather();
    console.log(data);
}
document.addEventListener('DOMcontentLoaded', fetchWeather);