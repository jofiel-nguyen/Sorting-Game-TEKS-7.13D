const items = [
    { id: '1', text: 'Galapagos Finches', category: 'natural' },
    { id: '2', text: 'Dog Breeds', category: 'selective' },
    { id: '3', text: 'Pesticide Resistance', category: 'natural' },
    { id: '4', text: 'Prize-winning Cattle', category: 'selective' },
    { id: '5', text: 'Bright colors for mating', category: 'natural' },
    { id: '6', text: 'Corn with larger kernels', category: 'selective' }
];

let timeLeft = 180; // 3 minutes in seconds
let timerInterval;
const timerDisplay = document.getElementById('timer');
const itemBank = document.getElementById('item-bank');
const feedback = document.getElementById('feedback');

function initGame() {
    itemBank.innerHTML = '';
    const shuffled = items.sort(() => Math.random() - 0.5);
    
    shuffled.forEach(item => {
        const div = document.createElement('div');
        div.className = 'draggable-item';
        div.draggable = true;
        div.innerText = item.text;
        div.id = item.id;
        div.ondragstart = drag;
        itemBank.appendChild(div);
    });

    startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        
        // Format time as MM:SS
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        timerDisplay.innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

        if (timeLeft <= 0) {
            endGame(false);
        }
    }, 1000);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
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
            feedback.innerText = "Correct!";
            feedback.style.color = "green";
            checkWin();
        } else {
            feedback.innerText = "Try again!";
            feedback.style.color = "red";
        }
    }
}

function checkWin() {
    if (itemBank.children.length === 0) {
        endGame(true);
    }
}

function endGame(isWin) {
    clearInterval(timerInterval); // Stop the clock
    itemBank.classList.add('disabled'); // Stop dragging
    
    if (isWin) {
        feedback.innerText = "Success! You finished before time ran out!";
        feedback.className = "game-over-text";
    } else {
        feedback.innerText = "Time's up! Let's review the answers.";
        feedback.className = "game-over-text";
        timerDisplay.innerText = "0:00";
    }
}

function resetGame() {
    location.reload();
}

initGame();
