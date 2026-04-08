const items = [
    { id: '1', text: 'Galapagos Finches', category: 'natural' },
    { id: '2', text: 'Dog Breeds', category: 'selective' },
    { id: '3', text: 'Pesticide Resistance', category: 'natural' },
    { id: '4', text: 'Prize-winning Cattle', category: 'selective' },
    { id: '5', text: 'Bright colors for mating', category: 'natural' },
    { id: '6', text: 'Corn with larger kernels', category: 'selective' }
];

const itemBank = document.getElementById('item-bank');
const feedback = document.getElementById('feedback');

function initGame() {
    itemBank.innerHTML = '';
    // Shuffle items for a new challenge each time
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
        } else {
            feedback.innerText = "Try again! That belongs in the other category.";
            feedback.style.color = "red";
        }
    }
    checkWin();
}

function checkWin() {
    if (itemBank.children.length === 0) {
        feedback.innerText = "Success! You've mastered TEKS 7.13D!";
    }
}

function resetGame() {
    location.reload();
}

initGame();
