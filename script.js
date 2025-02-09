const messages = [
    "Are you sure Raina?",
    "Really sure Rain</3??",
    "If u say no im not going to SD?",
    "Honey please...",
    "Just think about it<33!",
    "Ill leak the blackmail say yes...",
    "I was kidding but actually say yes",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please Raina ILY! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}