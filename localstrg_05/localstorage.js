function clickCounter() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }

        document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Sorry, please upgrade your browser";
    }
}

function clearItems() {
    window.localStorage.clear();
    location.reload();
}

function populatePerson() {
    var userFirstName = document.getElementById("firstName").value;
    var userLastName = document.getElementById("lastName").value;
    var userEmail = document.getElementById("email").value;
    var userPhone = document.getElementById("phone").value;

    var person = { firstName: userFirstName, lastName: userLastName, email: userEmail, phone: userPhone };

    localStorage.setItem('user', JSON.stringify(person));
    localStorage.setItem('browser-name', navigator.appCodeName);
    localStorage.setItem('browser-version', navigator.appVersion);
    localStorage.setItem('browser-cookies', navigator.cookieEnabled);

    document.getElementById("userOutput").innerHTML = "Your information was stored";
}

function setUser() {
    var user = JSON.parse(localStorage.getItem('user'));
    var browserName = localStorage.getItem('browser-name');
    var browserVersion = localStorage.getItem('browser-version');
    var browserCookies = localStorage.getItem('browser-cookies');

    document.getElementById("userOutput").innerHTML = "<b>User First Name:</b> " + user.firstName + "<br><b>User Last Name:</b> " + user.lastName + "<br><b>User Email:</b> " + user.email + "<br><b>User Phone:</b> " + user.phone + "<br><b>Browser Name:</b> " + browserName + "<br><b>Browser Version:</b> " + browserVersion + "<br><b>Browser Cookies (Enabled):</b> " + browserCookies;
}