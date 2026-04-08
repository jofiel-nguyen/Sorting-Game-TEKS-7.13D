const items = [
    { id: '1', text: 'Galapagos Finches', category: 'natural', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfI_E8-rZ9D9YnO0V_9XgIe58q-yG1X2-p9w&s' },
    { id: '2', text: 'Racehorses', category: 'selective', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6A6R7vYx7O4t29D1I3A_Yk8PzP7o0-n8A9w&s' },
    { id: '3', text: 'Resistant Bacteria', category: 'natural', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7f6R-k0u6T5L1I5Z1f8PzP7o0-n8A9w&s' },
    { id: '4', text: 'Domesticated Dogs', category: 'selective', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-9A6R7vYx7O4t29D1I3A_Yk8PzP7o0-n8A9w&s' },
    { id: '5', text: 'Peacock Feathers', category: 'natural', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2A6R7vYx7O4t29D1I3A_Yk8PzP7o0-n8A9w&s' },
    { id: '6', text: 'Large-kernel Corn', category: 'selective', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOXICFVJzIzFW1eclpiJa1FWVsvPK4aQPrYKMNYPEkBCQl9Pa8d4mdc1gyQFBneaeu55BKgiyXBFtca0zSAPOzxcwmGT4pqbJdV9iwBhoDtg&s=10' },
    { id: '7', text: 'Peppered Moths', category: 'natural', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Biston.betularia.f.carbonaria.7209.jpg/200px-Biston.betularia.f.carbonaria.7209.jpg' },
    { id: '8', text: 'Broccoli', category: 'selective', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mL5PFzewr3a2-ooN2-PrwdhSd8N-UoAScuY86AJ9nDS16VqIVXxLWyzJ2w0Il35pYcA5zJfcANFMpGqvcHtrZJzfOCPE4SrbaVgweXkA&s=10' },
    { id: '9', text: 'Pesticide Resistance', category: 'natural', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeA6R7vYx7O4t29D1I3A_Yk8PzP7o0-n8A9w&s' },
    { id: '10', text: 'Giraffe Necks', category: 'natural', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzA6R7vYx7O4t29D1I3A_Yk8PzP7o0-n8A9w&s' },
    { id: '11', text: 'Arctic Fox Fur', category: 'natural', img: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Vulpes_lagopus_in_Iceland_%28cropped_3%29.jpg' },
    { id: '12', text: 'Cactus Spines', category: 'natural', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzA6R7vYx7O4t29D1I3A_Yk8PzP7o0-n8A9w&s' },
    { id: '13', text: 'Poison Dart Frogs', category: 'natural', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLTNv5y1xS7_gwodV-x-ZUheCXJIE8hJUFJdx4o9lY6r7jNOWyeQpY4eRoTvlV4gz5opnHxfiooE6iowo6PlM3qP9BtcY4N9mgOBi64eVslw&s=10' },
    { id: '14', text: 'Fast Cheetahs', category: 'natural', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcUzA6R7vYx7O4t29D1I3A_Yk8PzP7o0-n8A9w&s' },
    { id: '15', text: 'Meatier Chickens', category: 'selective', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcVA6R7vYx7O4t29D1I3A_Yk8PzP7o0-n8A9w&s' },
    { id: '16', text: 'Hardy Wheat', category: 'selective', img: 'https://m.media-amazon.com/images/I/71jR1gsv1sL.jpg' },
    { id: '17', text: 'Persian Cats', category: 'selective', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73vrKgTAIPDvewfxJENo3XptLGFATb5bqkqKxBsCl4Fw6ut5IIeTc0FCn034X9dEKpDvAi0kesFaTzguV7PSnuaXGoOf_SYD2lr92aBg&s=10' },
    { id: '18', text: 'High-milk Cows', category: 'selective', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcWA6R7vYx7O4t29D1I3A_Yk8PzP7o0-n8A9w&s' },
    { id: '19', text: 'Fancy Goldfish', category: 'selective', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcYA6R7vYx7O4t29D1I3A_Yk8PzP7o0-n8A9w&s' },
    { id: '20', text: 'Seedless Melons', category: 'selective', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcZA6R7vYx7O4t29D1I3A_Yk8PzP7o0-n8A9w&s' }
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
