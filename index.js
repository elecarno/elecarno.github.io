var jingleButton = document.getElementById("jingle-button")
var enterButton = document.getElementById("enter-button")

var jingle = new Audio("./audio/portfolio_website_jingle_2.mp3");

enterButton.addEventListener("click", function() { 
    const quavers = document.querySelectorAll('.quaver');
    quavers.forEach(quaver => {
        quaver.style.animationPlayState = 'running';
    });

    jingle.play();
})

jingleButton.addEventListener("click", function() { 
    jingle.play();
})


feather.replace()