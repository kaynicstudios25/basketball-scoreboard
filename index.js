let hScore = document.getElementById("home-score")
let gScore = document.getElementById("guest-score")
console.log(gScore)

let homeScore = 0
let guestScore = 0

function add1HPoint() {
    hScore.textContent = homeScore += 1
}

function add2HPoints() {
    hScore.textContent = homeScore += 2
}

function add3HPoints() {
    hScore.textContent = homeScore += 3
}



function add1GPoint() {
    gScore.textContent = guestScore += 1
}

function add2GPoints() {
    gScore.textContent = guestScore += 2
}

function add3GPoints() {
    gScore.textContent = guestScore += 3
}
