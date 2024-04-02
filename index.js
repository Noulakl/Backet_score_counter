let homeScreen = document.querySelector("#homeSc");
let guestScreen = document.querySelector("#guestSc");

let homeCount = 0;
let guestCount = 0;


function addOneHome(){
    homeCount += 1;
    homeScreen.textContent = homeCount;
}

function addTwoHome(){
    homeCount += 2;
    homeScreen.textContent = homeCount;
}

function addThreeHome(){
    homeCount += 2;
    homeScreen.textContent = homeCount;
}

function addOneGest(){
    guestCount += 1;
    guestScreen.textContent = guestCount;
}

function addTwoGuest(){
    guestCount += 2;
    guestScreen.textContent = guestCount;
}

function addThreeGuest(){
    guestCount += 2;
    guestScreen.textContent = guestCount;
}


function newGame(){
    guestCount = 0;
    guestScreen.textContent = guestCount;
    homeCount = 0;
    homeScreen.textContent = homeCount;
}