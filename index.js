const redContainer = document.getElementById("red")
const blueContainer = document.getElementById("blue")

function onclickBLUE() {
    blueContainer.style.width = blueContainer.clientWidth + 10 + 'px'
    redContainer.style.width = redContainer.clientWidth - 10 + 'px'

}

function onclickRED() {
    redContainer.style.width = redContainer.clientWidth + 10 + 'px'
    blueContainer.style.width = blueContainer.clientWidth - 10 + 'px'
}