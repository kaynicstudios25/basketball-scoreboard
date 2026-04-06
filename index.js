let hScore = document.getElementById("home-score")
let gScore = document.getElementById("guest-score")
console.log(gScore)

let homeScore = 0
let guestScore = 0

function updateScoreboard() {
    hScore.textContent = homeScore
    gScore.textContent = guestScore

    // Check for Home leader
    if (homeScore > guestScore) {
        hScore.classList.add('win')
    } else {
        hScore.classList.remove('win')
    }

    // Check for Guest leader
    if (guestScore > homeScore) {
        gScore.classList.add('win')
    } else {
        gScore.classList.remove('win')
    }
}

function add1HPoint() {
    homeScore += 1
    updateScoreboard()
}

function add2HPoints() {
    homeScore += 2
    updateScoreboard()
}

function add3HPoints() {
    homeScore += 3
    updateScoreboard()
}



function add1GPoint() {
    guestScore += 1
    updateScoreboard()
}

function add2GPoints() {
    guestScore += 2
    updateScoreboard()
}

function add3GPoints() {
    guestScore += 3
    updateScoreboard()
}
