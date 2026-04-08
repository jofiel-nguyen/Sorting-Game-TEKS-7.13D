const items = [
    { id: '1', text: 'Galapagos Finches', category: 'natural', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Darwin%27s_finches_by_Gould.jpg/200px-Darwin%27s_finches_by_Gould.jpg' },
    { id: '2', text: 'Racehorses', category: 'selective', img: 'https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { id: '3', text: 'Resistant Bacteria', category: 'natural', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Staphylococcus_aureus%2C_50%2C000x%2C_01.jpg/150px-Staphylococcus_aureus%2C_50%2C000x%2C_01.jpg' },
    { id: '4', text: 'Domesticated Dogs', category: 'selective', img: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { id: '5', text: 'Peacock Feathers', category: 'natural', img: 'https://images.pexels.com/photos/632461/pexels-photo-632461.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { id: '6', text: 'Large-kernel Corn', category: 'selective', img: 'https://images.pexels.com/photos/54082/corn-vegetable-food-grain-54082.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { id: '7', text: 'Peppered Moths', category: 'natural', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Biston.betularia.f.carbonaria.7209.jpg/200px-Biston.betularia.f.carbonaria.7209.jpg' },
    { id: '8', text: 'Broccoli', category: 'selective', img: 'https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { id: '9', text: 'Pesticide Resistance', category: 'natural', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Colorado_potato_beetle.jpg/150px-Colorado_potato_beetle.jpg' },
    { id: '10', text: 'Giraffe Necks', category: 'natural', img: 'https://images.pexels.com/photos/806441/pexels-photo-806441.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { id: '11', text: 'Arctic Fox Fur', category: 'natural', img: 'https://images.pexels.com/photos/1410134/pexels-photo-1410134.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { id: '12', text: 'Cactus Spines', category: 'natural', img: 'https://images.pexels.com/photos/1034425/pexels-photo-1034425.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { id: '13', text: 'Poison Dart Frogs', category: 'natural', img: 'https://images.pexels.com/photos/70104/pexels-photo-70104.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { id: '14', text: 'Fast Cheetahs', category: 'natural', img: 'https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { id: '15', text: 'Meatier Chickens', category: 'selective', img: 'https://images.pexels.com/photos/1769279/pexels-photo-1769279.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { id: '16', text: 'Hardy Wheat', category: 'selective', img: 'https://images.pexels.com/photos/2090888/pexels-photo-2090888.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { id: '17', text: 'Persian Cats', category: 'selective', img: 'https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { id: '18', text: 'High-milk Cows', category: 'selective', img: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { id: '19', text: 'Fancy Goldfish', category: 'selective', img: 'https://images.pexels.com/photos/2133991/pexels-photo-2133991.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { id: '20', text: 'Seedless Melons', category: 'selective', img: 'https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&w=150' }
];

function initGame() {
    itemBank.innerHTML = '';
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    
    shuffled.forEach(item => {
        const div = document.createElement('div');
        div.className = 'draggable-item';
        div.draggable = true;
        div.innerHTML = `
            <img src="${item.img}" style="width:60px;height:60px;object-fit:cover;pointer-events:none;margin-bottom:5px;border-radius:5px;">
            <br>
            <span>${item.text}</span>
        `;
        div.id = item.id;
        div.ondragstart = drag;
        itemBank.appendChild(div);
    });
}
