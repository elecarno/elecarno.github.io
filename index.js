var jingleButton = document.getElementById("jingle-button")

var jingle = new Audio("./audio/portfolio_website_jingle_2.mp3");

jingleButton.addEventListener("click", function() { 
    jingle.play();
})

feather.replace()