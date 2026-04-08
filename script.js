const items = [
    // --- Original Items ---
    { id: '1', text: 'Galapagos Finches', category: 'natural' },
    { id: '2', text: 'Thoroughbred Racehorses', category: 'selective' },
    { id: '3', text: 'Bacteria developing resistance', category: 'natural' },
    { id: '4', text: 'Domesticated Dogs', category: 'selective' },
    { id: '5', text: 'Peacock tail feathers', category: 'natural' },
    { id: '6', text: 'Large-kernel sweet corn', category: 'selective' },
    { id: '7', text: 'Camouflage in Peppered Moths', category: 'natural' },
    { id: '8', text: 'Broccoli (from wild mustard)', category: 'selective' },

    // --- New Natural Selection Items ---
    { id: '9', text: 'Insects resistant to pesticides', category: 'natural' },
    { id: '10', text: 'Longer necks in giraffes', category: 'natural' },
    { id: '11', text: 'Arctic fox white winter fur', category: 'natural' },
    { id: '12', text: 'Cactus spines for protection', category: 'natural' },
    { id: '13', text: 'Poisonous skin in dart frogs', category: 'natural' },
    { id: '14', text: 'Faster running speeds in cheetahs', category: 'natural' },

    // --- New Selective Breeding Items ---
    { id: '15', text: 'Chickens bred for more meat', category: 'selective' },
    { id: '16', text: 'Drought-resistant wheat crops', category: 'selective' },
    { id: '17', text: 'Teacup Persian cats', category: 'selective' },
    { id: '18', text: 'Cows that produce more milk', category: 'selective' },
    { id: '19', text: 'Goldfish with double tails', category: 'selective' },
    { id: '20', text: 'Seedless watermelons', category: 'selective' }
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
