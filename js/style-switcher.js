/*----------Style switcher toggle---------- */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcherContainer = document.querySelector(".style-switcher");

styleSwitcherToggle.addEventListener("click", function(){
     styleSwitcherContainer.classList.toggle("open");    
});

/*----------Hide style swicther on scroll---------- */
window.addEventListener("scroll", () => {
    if(styleSwitcherContainer.classList.contains("open")){
        styleSwitcherContainer.classList.remove("open");
    }
});

/*----------Theme Colors---------- */
const alternateStyles = document.querySelectorAll(".alternate-style");
const logoImg = document.querySelector(".logo-image");

function setActiveStyle(theme, argument) {
    alternateStyles.forEach(function(style){
        if(theme === style.getAttribute('title')){
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
            // change logo color
            switch (argument){
                case "red":
                    document.querySelector("#change-logo").setAttribute("src", "./images/logo-red.svg");
                    break;
                case "green":
                    document.querySelector("#change-logo").setAttribute("src", "./images/logo-green.svg");
                    break;
                case "blue":
                    document.querySelector("#change-logo").setAttribute("src", "./images/logo-blue.svg");
                    break;
                case "pink":
                    document.querySelector("#change-logo").setAttribute("src", "./images/logo-pink.svg");
                    break;
                    default:
                        document.querySelector("#change-logo").setAttribute("src", "./images/logo-brown.svg");

            }

        };
    });

};
/*----------Light & Dark Mode---------- */
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", function () {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");

    if(document.body.classList.contains("dark")){
        document.body.classList.remove("dark");
        logoImg.setAttribute("src", "./images/logo-black.svg");

    } else {
        document.body.classList.add("dark");
        logoImg.setAttribute("src", "./images/logo-white.svg");
    }
});

window.addEventListener("load", function (){
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});
