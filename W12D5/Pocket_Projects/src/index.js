import {htmlGenerator} from "./warmup";
import Clock from "./clock";
import {dogs} from "./drop_down"
import {dogLinkCreator} from "./drop_down"
import {attachDogLinks} from "./drop_down"

const clock = new Clock();
const clockEl = document.getElementById("clock");
window.setInterval(() => {htmlGenerator(clock.printTime(), clockEl)}, 1000);
attachDogLinks();


document.addEventListener("DOMContentLoaded", () => {
    const dogUl = document.getElementsByClassName("drop-down-dog-list")
    const dogNav =document.getElementsByClassName("drop-down-dog-nav")
    // debugger;
    dogNav[0].addEventListener("mouseenter",(e) => {
        // debugger;
        const target = e.target
        target.classList.remove("hidden")
    })
    
    dogNav[0].addEventListener("mouseleave",(e) => {
        const target = e.target
        target.classList.add("hidden")
    })
    // handleEnter()
    // handleLeave()
})