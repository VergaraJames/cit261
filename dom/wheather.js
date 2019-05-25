export class Weather {
    constructor(city, countryCode) {
        this.apikey = "04da029b49107c7e93dca87abc168e57"
        this.city = city;
        this.countryCode = countryCode;

    }
    async getWeather() {
        const URI = `
        https://samples.openweathermap.org/data/2.5/weather?q=
        ${this.city},${this.countryCode}&appid=${this.apikey}&units=metric
        `;

        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }
    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }

}