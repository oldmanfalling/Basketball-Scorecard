let homeCountEl = document.getElementById("homeScore")
let guestCountEl = document.getElementById("guestScore")
let homeCount = 0
let guestCount = 0

function addOneHome() {
homeCount += 1
homeCountEl.textContent = homeCount
}

function addTwoHome() {
homeCount += 2
homeCountEl.textContent = homeCount
}

function addThreeHome() {
homeCount += 3
homeCountEl.textContent = homeCount
}

function addOneGuest() {
guestCount += 1
guestCountEl.textContent = guestCount
}

function addTwoGuest() {
guestCount += 2
guestCountEl.textContent = guestCount
}

function addThreeGuest() {
guestCount += 3
guestCountEl.textContent = guestCount
}

function reset() {
    homeCount = 0
    guestCount = 0
    homeCountEl.textContent = 0
    guestCountEl.textContent = 0
}
// functions to add 1, 2, and 3 points
// points need to be added to 2 seperate screens
// need to count from 0 and replace text on screen
// add a reset button