const items = [
    { id: '1', text: 'Galapagos Finches', category: 'natural', img: 'https://cdn-icons-png.flaticon.com/512/3035/3035134.png' },
    { id: '2', text: 'Racehorses', category: 'selective', img: 'https://cdn-icons-png.flaticon.com/512/3132/3132644.png' },
    { id: '3', text: 'Resistant Bacteria', category: 'natural', img: 'https://cdn-icons-png.flaticon.com/512/2913/2913501.png' },
    { id: '4', text: 'Domesticated Dogs', category: 'selective', img: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' },
    { id: '5', text: 'Peacock Feathers', category: 'natural', img: 'https://cdn-icons-png.flaticon.com/512/2623/2623783.png' },
    { id: '6', text: 'Large-kernel Corn', category: 'selective', img: 'https://cdn-icons-png.flaticon.com/512/1155/1155250.png' },
    { id: '7', text: 'Peppered Moths', category: 'natural', img: 'https://cdn-icons-png.flaticon.com/512/450/450702.png' },
    { id: '8', text: 'Broccoli', category: 'selective', img: 'https://cdn-icons-png.flaticon.com/512/2346/2346927.png' },
    { id: '9', text: 'Pesticide Resistance', category: 'natural', img: 'https://cdn-icons-png.flaticon.com/512/3248/3248381.png' },
    { id: '10', text: 'Giraffe Necks', category: 'natural', img: 'https://cdn-icons-png.flaticon.com/512/1864/1864475.png' },
    { id: '11', text: 'Arctic Fox Fur', category: 'natural', img: 'https://cdn-icons-png.flaticon.com/512/10542/10542369.png' },
    { id: '12', text: 'Cactus Spines', category: 'natural', img: 'https://cdn-icons-png.flaticon.com/512/136/136693.png' },
    { id: '13', text: 'Poison Dart Frogs', category: 'natural', img: 'https://cdn-icons-png.flaticon.com/512/11499/11499003.png' },
    { id: '14', text: 'Fast Cheetahs', category: 'natural', img: 'https://cdn-icons-png.flaticon.com/512/2330/2330691.png' },
    { id: '15', text: 'Meatier Chickens', category: 'selective', img: 'https://cdn-icons-png.flaticon.com/512/2951/2951119.png' },
    { id: '16', text: 'Hardy Wheat', category: 'selective', img: 'https://cdn-icons-png.flaticon.com/512/4836/4836693.png' },
    { id: '17', text: 'Persian Cats', category: 'selective', img: 'https://cdn-icons-png.flaticon.com/512/616/616430.png' },
    { id: '18', text: 'High-milk Cows', category: 'selective', img: 'https://cdn-icons-png.flaticon.com/512/2395/2395796.png' },
    { id: '19', text: 'Fancy Goldfish', category: 'selective', img: 'https://cdn-icons-png.flaticon.com/512/2261/2261621.png' },
    { id: '20', text: 'Seedless Melons', category: 'selective', img: 'https://cdn-icons-png.flaticon.com/512/3361/3361545.png' }
];

function initGame() {
    itemBank.innerHTML = '';
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    
    shuffled.forEach(item => {
        const div = document.createElement('div');
        div.className = 'draggable-item';
        div.draggable = true;
        // This adds the image and the text inside the draggable box
        div.innerHTML = `
            <img src="${item.img}" style="width:40px;height:40px;pointer-events:none;margin-bottom:5px;">
            <br>
            <span>${item.text}</span>
        `;
        div.id = item.id;
        div.ondragstart = drag;
        itemBank.appendChild(div);
    });
}
