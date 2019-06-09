/****
 * This function will make an AJAX call to https://api.openweathermap.org to retrieve the weather of the city.
 **/

function getData() {
    const key = "f7ee9df4b712457a78edab4465753b2a";
    const unit = "metric";
    const city = "bogota";
    const country = "co";

    /*    https://www.w3schools.com/js/js_ajax_http_response.asp */
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=city,country&APPID=key&unit", true);
    xhttp.send();

}