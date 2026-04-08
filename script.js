const items = [
    { id: '1', text: 'Galapagos Finches', category: 'natural' },
    { id: '2', text: 'Thoroughbred Racehorses', category: 'selective' },
    { id: '3', text: 'Bacteria developing resistance', category: 'natural' },
    { id: '4', text: 'Domesticated Dogs', category: 'selective' },
    { id: '5', text: 'Peacock tail feathers', category: 'natural' },
    { id: '6', text: 'Large-kernel sweet corn', category: 'selective' },
    { id: '7', text: 'Camouflage in Peppered Moths', category: 'natural' },
    { id: '8', text: 'Broccoli (from wild mustard)', category: 'selective' }
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
        div.innerText = item.text;
        div.id = item.id;
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
    startTimer(); // Start clock on first interaction
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
            feedback.innerText = "❌ Try again! That isn't right.";
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
        feedback.innerText = "🏆 Mastery Achieved! All sorted correctly.";
        feedback.style.color = "#27ae60";
    } else {
        feedback.innerText = "⏰ Time is up! Review the remaining items.";
        feedback.style.color = "#c0392b";
        timerDisplay.innerText = "0:00";
    }
}

function resetGame() { location.reload(); }

initGame();
