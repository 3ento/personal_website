function revealEmail() {
    const emailText = document.getElementById("email-text");
    const container = document.querySelector(".email-container");

    emailText.classList.toggle("revealed");
    container.classList.toggle("revealed");
}

function revealPhone() {
    const emailText = document.getElementById("phone-text");
    const container = document.querySelector(".phone-container");

    emailText.classList.toggle("revealed");
    container.classList.toggle("revealed");
}

function goToPGTK() {
    window.open("https://tcom-sf.org/")
}

function goToTU() {
    window.open("https://www.tu-sofia.bg/")
}

function goToSoftUni() {
    window.open("https://softuni.bg/")
}
