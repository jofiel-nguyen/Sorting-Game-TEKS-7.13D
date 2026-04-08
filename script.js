const items = [
    { id: '1', text: 'Galapagos Finches', category: 'natural', img: 'https://placehold.co/60x60/3498db/white?text=Finch' },
    { id: '2', text: 'Racehorses', category: 'selective', img: 'https://placehold.co/60x60/e67e22/white?text=Horse' },
    { id: '3', text: 'Resistant Bacteria', category: 'natural', img: 'https://placehold.co/60x60/3498db/white?text=Germs' },
    { id: '4', text: 'Domesticated Dogs', category: 'selective', img: 'https://placehold.co/60x60/e67e22/white?text=Dog' },
    { id: '5', text: 'Peacock Feathers', category: 'natural', img: 'https://placehold.co/60x60/3498db/white?text=Peacock' },
    { id: '6', text: 'Large-kernel Corn', category: 'selective', img: 'https://placehold.co/60x60/e67e22/white?text=Corn' },
    { id: '7', text: 'Peppered Moths', category: 'natural', img: 'https://placehold.co/60x60/3498db/white?text=Moth' },
    { id: '8', text: 'Broccoli', category: 'selective', img: 'https://placehold.co/60x60/e67e22/white?text=Broccoli' },
    { id: '9', text: 'Pesticide Resistance', category: 'natural', img: 'https://placehold.co/60x60/3498db/white?text=Bug' },
    { id: '10', text: 'Giraffe Necks', category: 'natural', img: 'https://placehold.co/60x60/3498db/white?text=Giraffe' },
    { id: '11', text: 'Arctic Fox Fur', category: 'natural', img: 'https://placehold.co/60x60/3498db/white?text=Fox' },
    { id: '12', text: 'Cactus Spines', category: 'natural', img: 'https://placehold.co/60x60/3498db/white?text=Cactus' },
    { id: '13', text: 'Poison Dart Frogs', category: 'natural', img: 'https://placehold.co/60x60/3498db/white?text=Frog' },
    { id: '14', text: 'Fast Cheetahs', category: 'natural', img: 'https://placehold.co/60x60/3498db/white?text=Cheetah' },
    { id: '15', text: 'Meatier Chickens', category: 'selective', img: 'https://placehold.co/60x60/e67e22/white?text=Chicken' },
    { id: '16', text: 'Hardy Wheat', category: 'selective', img: 'https://placehold.co/60x60/e67e22/white?text=Wheat' },
    { id: '17', text: 'Persian Cats', category: 'selective', img: 'https://placehold.co/60x60/e67e22/white?text=Cat' },
    { id: '18', text: 'High-milk Cows', category: 'selective', img: 'https://placehold.co/60x60/e67e22/white?text=Cow' },
    { id: '19', text: 'Fancy Goldfish', category: 'selective', img: 'https://placehold.co/60x60/e67e22/white?text=Fish' },
    { id: '20', text: 'Seedless Melons', category: 'selective', img: 'https://placehold.co/60x60/e67e22/white?text=Melon' }
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
        div.innerHTML = `
            <img src="${item.img}" alt="${item.text}">
            <span>${item.text}</span>
        `;
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
