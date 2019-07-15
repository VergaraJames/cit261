function buildPage() {

    var heading = document.createElement("h2");
    var headingtext = document.createTextNode("DOM Manipulation Using createElement, appendChild, insertBefore, removeChild, etc.");
    heading.appendChild(headingtext);
    document.body.appendChild(heading);

    var heading2 = document.createElement("h1");
    var headingtext2 = document.createTextNode("This page is built entirely using DOM Manipulation!");
    heading2.appendChild(headingtext2);
    document.body.appendChild(heading2);

    var image = document.createElement("img");
    image.setAttribute("src", "https://static.pexels.com/photos/261108/pexels-photo-261108.jpeg");
    image.setAttribute("width", "50%");
    image.setAttribute("height", "25%");
    document.body.appendChild(image);

    var divParent = document.createElement("div");
    divParent.setAttribute("id", "parent");
    document.body.append(divParent);

    var paragraph1 = document.createElement("p");
    paragraph1.setAttribute("id", "p1");
    var text1 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam, ipsum eu aliquam lacinia, dui orci vulputate orci, nec lacinia enim justo nec neque. Sed quis vehicula erat. Mauris tristique rutrum nisi, viverra consequat urna viverra nec. Nam vitae elementum dui. Donec eu ex neque. Sed condimentum libero ligula, a congue metus condimentum id. Quisque fringilla leo eu tellus congue, eget bibendum leo aliquet. Donec tristique metus vitae lacus porttitor tincidunt. Cras eget sapien dapibus nunc fermentum vestibulum. Sed et lectus ac lorem convallis euismod.");
    paragraph1.appendChild(text1);
    divParent.appendChild(paragraph1);

    var paragraph2 = document.createElement("p");
    paragraph2.setAttribute("id", "p2");
    var text2 = document.createTextNode("Etiam consequat quam nisl, ac tempus odio facilisis aliquam. Phasellus nec consequat massa. Etiam faucibus ante id pulvinar scelerisque. Praesent massa tellus, tincidunt id ipsum eu, pharetra porttitor ipsum. Cras mauris nibh, sodales sed lorem vitae, convallis placerat nisi. Sed sed convallis quam. Praesent volutpat mauris id mattis tristique. Duis a ex orci. Nulla justo urna, consectetur a arcu id, sodales facilisis enim. Nullam eget luctus metus. Vestibulum suscipit posuere sapien. Praesent et ultricies urna, ac pellentesque velit. Sed tempor, ligula et tristique hendrerit, elit risus tempus libero, eu finibus libero diam finibus leo. Morbi ac vestibulum sapien. Fusce feugiat tempus leo non semper.");
    paragraph2.appendChild(text2);
    divParent.appendChild(paragraph2);

    var paragraph3 = document.createElement("p");
    paragraph3.setAttribute("id", "p3")
    var text3 = document.createTextNode("Duis venenatis semper diam in efficitur. Nullam lorem felis, venenatis vel laoreet et, vestibulum nec urna. Ut finibus aliquet lorem sed aliquam. Nullam eu justo lacus. Sed vel rhoncus turpis. Quisque faucibus libero lorem. Cras rhoncus dignissim lacus id imperdiet. Morbi nec convallis ipsum, ac pharetra felis. Mauris ut dui placerat dui tempor scelerisque nec id risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi posuere vitae odio at auctor. Integer eget auctor nunc. Quisque fringilla justo at risus fringilla, a rhoncus dui pulvinar. Nulla semper enim vitae ligula consequat, placerat consectetur quam iaculis. Curabitur ut est tellus.");
    paragraph3.appendChild(text3);
    divParent.appendChild(paragraph3);

    var divButton = document.createElement("div");
    divButton.setAttribute("class", "button-container");
    document.body.appendChild(divButton);

    var removeButton = document.createElement("button");
    removeButton.setAttribute("type", "button");
    removeButton.setAttribute("onclick", "removeElement()");
    var buttonText = document.createTextNode("Remove Element");
    removeButton.appendChild(buttonText);
    divButton.appendChild(removeButton);

    var insertButton = document.createElement("button");
    insertButton.setAttribute("type", "button");
    insertButton.setAttribute("onclick", "insertElement()");
    var buttonText2 = document.createTextNode("Insert Element");
    insertButton.appendChild(buttonText2);
    divButton.appendChild(insertButton);

    var resetButton = document.createElement("button");
    resetButton.setAttribute("type", "button");
    resetButton.setAttribute("onclick", "location.reload()");
    var buttonText3 = document.createTextNode("Reset");
    resetButton.appendChild(buttonText3);
    divButton.appendChild(resetButton);

    var homeButton = document.createElement("button");
    homeButton.setAttribute("type", "button");
    homeButton.setAttribute("onclick", "window.location.href='index.html'");
    var buttonText4 = document.createTextNode("Home");
    homeButton.appendChild(buttonText4);
    divButton.appendChild(homeButton);
}

function removeElement() {
    var parent = document.getElementById("parent");
    var child = document.getElementById("p3");
    parent.removeChild(child);
}

function insertElement() {
    var paragraph = document.createElement("p");
    paragraph.setAttribute("id", "p4");
    var text = document.createTextNode("This is a newly inserted paragraph text");
    paragraph.appendChild(text);

    var parent = document.getElementById("parent");
    var child = document.getElementById("p2");
    parent.insertBefore(paragraph, child);
}