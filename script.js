'use strict';
console.log('hi there!');
const sel = function (element) {
    if (element.charAt(0) === '#') {
        // If passed an ID...
        return document.querySelector(element); // ... returns single element
    }
    return document.querySelectorAll(element); // Otherwise, returns a nodelist
};

const secondHand = document.querySelector('.second-hand');
console.log(secondHand);
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDeg = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;

    const minutes = now.getMinutes();
    const minutesDeg = (minutes / 60) * 360 + 90;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;

    const hours = now.getHours();
    const hoursDeg = (hours / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setDate, 1000);
