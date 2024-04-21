//here are the screens and displays
const homeScreen = document.querySelector("#homeSc");
const guestScreen = document.querySelector("#guestSc");
const HomeTeamNameEl = document.querySelector("#HomeTeam");
const GuestTeamNameEl = document.querySelector("#GuestTeam");
const winner = document.querySelector("#winner");
const PreviousmatchSec = document.querySelector("#Previous_match")
let matchList = document.querySelector("#MatchList");
let StoredMatch = JSON.parse(localStorage.getItem("PrevisousMatches"))

//following are the buttons
const finishMatch_btn = document.querySelector("#FinishMatch");
const saveBtn = document.querySelector("#saveMatch");
const newGameBtn = document.querySelector("#newGame");
const clearListBtn = document.querySelector("#clear");

// addbtns
const addOneHomeBtn = document.getElementById("1home");
const addTwoHomeBtn = document.getElementById("2home");
const addThreeHomeBtn = document.getElementById("3home");
const addOneGuestBtn = document.getElementById("1guest");
const addTwoGuestBtn = document.getElementById("2guest");
const addThreeGuestBtn = document.getElementById("3guest");

// let variables
let HomeTeamName = "";
let GuestTeamName = "";
let homeCount = 0;
let guestCount = 0;
let matchArr = [];

if (matchArr === false){

    PreviousmatchSec.innerHTML += `<button class="notScoringbtn" id="clear"> Clear List</button>`
}
//rendering the previous matches

if (StoredMatch){
    matchArr = StoredMatch
    render(matchArr)
}


//add functions

function addPoin(count,poin){
   return count += poin 
}

// GUest buttons
addOneGuestBtn.addEventListener("click", function(){
    guestCount = addPoin(guestCount,1)
    guestScreen.textContent = guestCount;
});

addTwoGuestBtn.addEventListener("click", function(){
     guestCount = addPoin(guestCount,2)
      guestScreen.textContent = guestCount;
});


addThreeGuestBtn.addEventListener("click", function(){
    guestCount = addPoin(guestCount,3)
    guestScreen.textContent = guestCount;
});

// Home buttons
addOneHomeBtn.addEventListener("click", function(){
    homeCount = addPoin(homeCount,1)
    homeScreen.textContent = homeCount;
});

addTwoHomeBtn.addEventListener("click", function(){
    homeCount = addPoin(homeCount,2)
    homeScreen.textContent = homeCount;
});

addThreeHomeBtn.addEventListener("click", function(){
    homeCount = addPoin(homeCount,3)
    homeScreen.textContent = homeCount;
});

// Game

function startGame(){
    guestScreen.textContent = 0;
    homeScreen.textContent = 0;
    HomeTeamName = HomeTeamNameEl.value;
    GuestTeamName = GuestTeamNameEl.value;
    winner.textContent = "";
    homeCount = 0;
    guestCount = 0;
};

function render(arr){
    let list = " "
    for (let i = 0;  i < arr.length; i++ ){
       list +=  `<li>${arr[i]}</li>`
    }; 
    matchList.innerHTML = list
}

function finishGame(){
    matchArr.push(`${HomeTeamName}  ${homeCount} - ${GuestTeamName} ${guestCount}`)
    localStorage.setItem("PrevisousMatches", JSON.stringify(matchArr))
    if(guestCount < homeCount){
       winner.textContent = `The winner is ${HomeTeamName} 🎉🎊`
    } else if (homeCount < guestCount) {
       winner.textContent = `The winner is  ${GuestTeamName}  🎉🎊`
    } else {
       winner.textContent = ` 🎊🎉Win - Win🎉🎊`
    }
    HomeTeamNameEl.value = " "
    GuestTeamNameEl.value = " " 
    homeCount = 0;
    guestCount = 0;
    render(matchArr)
}

// here below are buttons when they are pressed

newGameBtn.addEventListener("click", function(){
    startGame()
})



finishMatch_btn.addEventListener("click", function(){
finishGame()
 render(matchArr)
});

clearListBtn.addEventListener("click", function(){
    localStorage.clear()
    matchArr = []
    render(matchArr)
});
