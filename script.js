const items = [
    { id: '1', text: 'Finches', category: 'natural', img: './img/finches.webp' },
    { id: '2', text: 'Racehorses', category: 'selective', img: './img/racehorse.jpg' },
    { id: '3', text: 'Bacteria', category: 'natural', img: './img/bacteria.jpg' },
    { id: '4', text: 'Pet Dogs', category: 'selective', img: './img/petdog.jpg' },
    { id: '5', text: 'Peacock', category: 'natural', img: './img/Peacock.jpg' },
    { id: '6', text: 'Giant Corn', category: 'selective', img: './img/giantcorn.jpg' },
    { id: '7', text: 'Dark Moths', category: 'natural', img: './img/darkmoths.webp' },
    { id: '8', text: 'Broccoli', category: 'selective', img: './img/Broccoli.webp' },
    { id: '9', text: 'Giraffes', category: 'natural', img: './img/giraffe.webp' },
    { id: '10', text: 'Dairy Cow', category: 'selective', img: './img/cow.webp' }
];

let timeLeft = 180;
let timerInterval;
let gameStarted = false;

const timerDisplay = document.getElementById('timer');
const itemBank = document.getElementById('item-bank');
const feedback = document.getElementById('feedback');

function initGame() {
    itemBank.innerHTML = '';
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    
    shuffled.forEach(item => {
        const div = document.createElement('div');
        div.className = 'draggable-item';
        div.draggable = true;
        div.id = item.id;
        div.innerHTML = `
            <img src="${item.img}" alt="${item.text}">
            <span>${item.text}</span>
        `;
        div.ondragstart = drag;
        itemBank.appendChild(div);
    });
}

function startTimer() {
    if (gameStarted) return;
    gameStarted = true;
    timerInterval = setInterval(() => {
        timeLeft--;
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        timerDisplay.innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        if (timeLeft <= 0) endGame(false);
    }, 1000);
}

function allowDrop(ev) { ev.preventDefault(); }

function drag(ev) {
    startTimer();
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    const dropTarget = ev.target.closest('.drop-zone');

    if (dropTarget) {
        const itemData = items.find(i => i.id === data);
        if (dropTarget.id === itemData.category) {
            dropTarget.appendChild(draggedElement);
            feedback.innerText = "✅ Correct!";
            feedback.style.color = "#27ae60";
            checkWin();
        } else {
            feedback.innerText = "❌ Try again!";
            feedback.style.color = "#e74c3c";
        }
    }
}

function checkWin() {
    if (itemBank.children.length === 0) endGame(true);
}

function endGame(isWin) {
    clearInterval(timerInterval);
    itemBank.classList.add('disabled');
    if (isWin) {
        feedback.innerText = "🏆 Mastery Achieved!";
        feedback.style.color = "#27ae60";
    } else {
        feedback.innerText = "⏰ Time is up!";
        feedback.style.color = "#c0392b";
    }
}

function resetGame() {
    location.reload();
}

// Initial Call
initGame();
