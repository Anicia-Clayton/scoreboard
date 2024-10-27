let scoreHomeEl = document.getElementById("scoreHome-el")
let scoreGuestEl = document.getElementById("scoreGuest-el")
let scoreHome = 0
let scoreGuest = 0

function plus1Home() {
    scoreHome = scoreHome + 1
    scoreHomeEl.textContent = scoreHome
}

function plus2Home() {
    scoreHome = scoreHome + 2
    scoreHomeEl.textContent = scoreHome
}

function plus3Home() {
    scoreHome = scoreHome + 3
    scoreHomeEl.textContent = scoreHome
}

function plus1Guest() {
    scoreGuest = scoreGuest + 1
    scoreGuestEl.textContent = scoreGuest
}

function plus2Guest() {
    scoreGuest = scoreGuest + 2
    scoreGuestEl.textContent = scoreGuest
}

function plus3Guest() {
    scoreGuest = scoreGuest + 3
    scoreGuestEl.textContent = scoreGuest
}

// Subtraction (Correction)
function minus1Home() {
    scoreHome = scoreHome - 1
    scoreHomeEl.textContent = scoreHome
}

function minus2Home() {
    scoreHome = scoreHome - 2
    scoreHomeEl.textContent = scoreHome
}

function minus3Home() {
    scoreHome = scoreHome - 3
    scoreHomeEl.textContent = scoreHome
}

function minus1Guest() {
    scoreGuest = scoreGuest - 1
    scoreGuestEl.textContent = scoreGuest
}

function minus2Guest() {
    scoreGuest = scoreGuest - 2
    scoreGuestEl.textContent = scoreGuest
}

function minus3Guest() {
    scoreGuest = scoreGuest - 3
    scoreGuestEl.textContent = scoreGuest
}

function newGame() {
    scoreHome = 0;
    scoreHomeEl.textContent = 0;
    
    scoreGuest = 0;
    scoreGuestEl.textContent = 0;
}
