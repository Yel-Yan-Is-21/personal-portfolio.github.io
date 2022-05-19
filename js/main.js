/*------------------Typing animation------------------- */
let typed = new Typed (".typing",{
    strings: ["", "Web Designer", "Frontend Developer", "UI/UX Designer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true,
});


/*------------------Nav Active------------------- */
const nav = document.querySelector(".nav");
const navItems = nav.querySelectorAll(".nav-item");
const navItemsLength = navItems.length;
const allSelection = document.querySelectorAll(".section");
const sectionLength = allSelection.length;

for(let i = 0; i < navItemsLength; i++){
    let link = navItems[i].querySelector(".nav-link");

    link.addEventListener('click', function (){
                // remove back section
                removeBackSection();
                for(let j = 0 ; j < navItemsLength; j++){
                    // put back-section
                    if(navItems[j].querySelector("a").classList.contains("active")){
                        addBackSection(j);
                        // allSelection[j].classList.add("back-section");
                    }
                    navItems[j].querySelector("a").classList.remove("active");
                }
        link.classList.add("active");
        // put show section 
        showSection(this);

        // under 1200px and click link aside will disappear
        if(window.innerWidth < 1200){
            asideSectionToggleBtn();
        }
    });
};
//remove back section
function removeBackSection(){
    for(let i = 0; i < sectionLength; i++){
        allSelection[i].classList.remove("back-section");
    };
}
//add back section
function addBackSection(num){
        allSelection[num].classList.remove("back-section");
}
// show section slide
function showSection(element){
    for(let i = 0; i < sectionLength; i++){
        allSelection[i].classList.remove("active");
    }

    let target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");

}
/*------------------Hire me btn------------------- */
function updateNav (element){
    for(let i = 0; i < navItemsLength; i++){
        navItems[i].querySelector("a").classList.remove("active");
        let target = element.getAttribute("href").split("#")[1];
        if(target === navItems[i].querySelector("a").getAttribute("href").split("#")[1]){
            navItems[i].querySelector("a").classList.add("active");
        }
    }
}

const hireMe = document.querySelector(".hire-me");
hireMe.addEventListener("click", function (){
    const sectionIndex = this.getAttribute("data-section-index");
    // console.log(sectionIndex)
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});

/*------------------Nav Toggle btn------------------- */
const navToggleBtn = document.querySelector(".nav-toggle");
const aside = document.querySelector(".aside");

navToggleBtn.addEventListener("click", function (){
    asideSectionToggleBtn();
});

function asideSectionToggleBtn(){
    aside.classList.toggle("open");
    navToggleBtn.classList.toggle("open");
    for(let i = 0; i < sectionLength; i++){
        allSelection[i].classList.toggle("open");
    }
}



