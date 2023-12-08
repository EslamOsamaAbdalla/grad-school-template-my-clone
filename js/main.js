/*** header ***/
const nav = document.querySelector("nav");
const navList = document.querySelectorAll("nav > ul > li > a");
const aboutUsMenuContainer = document.querySelector("#about-us-container > a");
const aboutUsMenu = document.querySelector("#about-us-container ul");
const navIicon = document.querySelector("#nav-icon");
navList.forEach(function(i) {
    i.onmouseover = function() {
        if (innerWidth > 678) {
            this.style.transition = "border .5s";
            this.classList.add("active");
        }
    }
    i.onmouseout  = function() {
        if (innerWidth > 678) {
        this.classList.remove("active")
        }
    }
})
aboutUsMenu.onmouseover = () => { aboutUsMenuContainer.classList.add("active") }
aboutUsMenu.onmouseout = () => { aboutUsMenuContainer.classList.remove("active") }
window.onscroll = function() {
    if (innerWidth > 678) {
        if ((document.body.scrollTop > 0 && document.body.scrollTop < 590) || 
        (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop  < 590)) {
        navList[0].classList.add("active");
        } else {
            navList[0].classList.remove("active");
        }
        if ((document.body.scrollTop > 590 && document.body.scrollTop < 2015 ) || 
            (document.documentElement.scrollTop > 590 && document.documentElement.scrollTop < 2015)) {
            navList[1].classList.add("active");
        } else {
            navList[1].classList.remove("active");
        }

        if ((document.body.scrollTop > 2015 && document.body.scrollTop < 3550 )|| 
            (document.documentElement.scrollTop > 2015 && document.documentElement.scrollTop < 3550)) {
            navList[2].classList.add("active");
        } else {
            navList[2].classList.remove("active");
        }

        if ((document.body.scrollTop > 3550 )|| 
            (document.documentElement.scrollTop > 3550)) {
            navList[3].classList.add("active");
        } else {
            navList[3].classList.remove("active");
        }
    }
}
navIicon.onclick = function() {
    if (nav.style.display == "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}
/*** header ***/
/*** welcome section ***/
const modelContainerChild = document.querySelectorAll("#model-container div");
modelContainerChild.forEach( function(i) {
    i.onmouseover = function() {
        this.style.transition = "height .5s";
        this.style.backgroundColor = "orange";
        this.style.height = "300px";
        this.children[1].style.display = "block";
        this.children[2].style.display = "block";
    }
    i.onmouseout = function() {
        this.style.backgroundColor = "#142038";
        this.style.height = "100px";
        this.children[1].style.display = "none";
        this.children[2].style.display = "none";
    }
})
/*** welcome section ***/
/*** why choose our ***/
const whyChooseFormChild = document.querySelectorAll("#why-choose-form div");
const whyChooseCrouserChild = document.querySelectorAll("#why-choose-crouser-container > div");
whyChooseFormChild.forEach(function(i) {
    i.onclick = function() {
        for (let y = 0; y < whyChooseFormChild.length; y++) {
            whyChooseFormChild[y].children[1].style.padding = "";
            whyChooseFormChild[y].children[1].style.border = "";
            whyChooseFormChild[y].style.color = "white";
        }
        this.style.color = "orange";
        this.children[1].style.border = "1px solid orange";
        this.children[1].style.padding = "2px";
        for (let c = 0; c < whyChooseCrouserChild.length; c++) {
            whyChooseCrouserChild[c].style.display = "none";
        }
        let crousalData = this.getAttribute("crusal-index");
        whyChooseCrouserChild[crousalData].style.display = "flex";
    }
})
/*** why choose our ***/
/*** Register about us ***/
const counterContainer = document.querySelectorAll("#counter-childrean > div div:first-child");
let theCounter = setInterval(() => {
    let nowTime = new Date();
    let counterTime = new Date(2024, 10, 8, 0, 0, 0, 0);
    let nowTimeInMille = nowTime.getTime();
    let counterTimeInMille = counterTime.getTime();
    let timeBetween = counterTimeInMille - nowTimeInMille;
    let sec = Math.floor(timeBetween / 1000);
    let min = Math.floor(sec / 60);
    let h = Math.floor(min / 60);
    let d = Math.floor(h / 24);
    h %= 24;
    min %= 60;
    sec %= 60;
    counterContainer[0].innerHTML = d;
    counterContainer[1].innerHTML = h;
    counterContainer[2].innerHTML = min;
    counterContainer[3].innerHTML = sec;
    if (nowTimeInMille > counterTimeInMille) {
        clearInterval(theCounter)
        counterContainer[0].innerHTML = 0;
        counterContainer[1].innerHTML = 0;
        counterContainer[2].innerHTML = 0;
        counterContainer[3].innerHTML = 0;
    }
}, 1000);
/*** Register about us ***/
/*** video section ***/
const videoSectionBtn = document.querySelector("#video-section > div:last-child button");
const videoSectionIframe = document.querySelector("#video-section > div:last-child div div");
const videoSectionClose = document.querySelector("#video-section > div:last-child > div > div button");
videoSectionBtn.onclick = function() {
    videoSectionIframe.style.display = "block";
}
videoSectionClose.onclick = function() {
    videoSectionIframe.style.display = "none";
}
/*** video section ***/
/*** courses crousal***/
const sliderContainer = document.querySelector("#courses-crousal");
const sliderParent = document.querySelector(".course-crousal-parent");
const coursesCrousaIindcator = document.querySelectorAll("#courses-crousal-indcator div");
const leftCrousalArrow = document.querySelector(".left-crousal");
const rightCrousalArrow = document.querySelector(".right-crousal");
let startValue;
let moveValue;
let pressed = false;
sliderContainer.addEventListener("mousedown", (e) => {
    pressed = true;
    startValue = e.offsetX - sliderParent.offsetLeft;
    sliderContainer.style.cursor = "grabbing";
});
sliderContainer.addEventListener("mouseup", () => {
    sliderContainer.style.cursor = "grab";
    pressed = false;
});
sliderContainer.addEventListener("mousemove", (e) => {
    if (!pressed) {
        return;
    }
    e.preventDefault();
    moveValue = e.offsetX;
    sliderParent.style.left = `${moveValue - startValue}px`;
    checkEdges();
});
function checkEdges() {
    let inner = sliderContainer.getBoundingClientRect();
    let outer = sliderParent.getBoundingClientRect();
    if (parseInt(sliderParent.style.left) > 0) {
        sliderParent.style.left = "0px";
    }else if (parseInt(sliderParent.style.left) < (inner.width - outer.width)) {
        sliderParent.style.left = `${inner.width - outer.width}px`;
    }
    if (parseInt(sliderParent.style.left) > -678 && parseInt(sliderParent.style.left) < 0) {
        for (let y = 0; y < coursesCrousaIindcator.length; y++) {
            coursesCrousaIindcator[y].style.color = "white";
        }
        coursesCrousaIindcator[0].style.color = "orange";
    }else if (parseInt(sliderParent.style.left) < -678 && parseInt(sliderParent.style.left) > -1349) {
        for (let y = 0; y < coursesCrousaIindcator.length; y++) {
            coursesCrousaIindcator[y].style.color = "white";
        }
        coursesCrousaIindcator[1].style.color = "orange";
    }else if (parseInt(sliderParent.style.left) == -1349) {
        for (let y = 0; y < coursesCrousaIindcator.length; y++) {
            coursesCrousaIindcator[y].style.color = "white";
        }
        coursesCrousaIindcator[2].style.color = "orange";
    }
    console.log(sliderParent.style.left)
}
coursesCrousaIindcator.forEach(function(i) {
    i.onclick = function() {
        for (let y = 0; y < coursesCrousaIindcator.length; y++) {
            coursesCrousaIindcator[y].style.color = "white";
        }
        this.style.color = "orange";
        let crousalData = this.getAttribute("crousal-index");
        sliderParent.style.transition = "all 0.5s"
        if (crousalData == 1) {
            sliderParent.style.left = "0px";
        } else if (crousalData == 2) {
            sliderParent.style.left = "-678px";
        }else if (crousalData == 3) {
            sliderParent.style.left = "-1349px";
        }
    }
})
leftCrousalArrow.onclick = function() {
    let decVal =  parseInt(sliderParent.style.left);
    if (parseInt(sliderParent.style.left) == 0) {
        return;
    } else{
    sliderParent.style.left = `${decVal + 311}px`;
    }
}
rightCrousalArrow.onclick = function() {
    let incVal =  parseInt(sliderParent.style.left);
    if (parseInt(sliderParent.style.left) < -3100) {
        return;
    } else {
        sliderParent.style.left = `${incVal - 311}px`;
    }
}
window.onload = function(){
    sliderParent.style.left = 0
}
/*** courses crousal***/