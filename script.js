const items = [
    { id: '1', text: 'Galapagos Finches', category: 'natural', img: 'https://www.pbs.org/wnet/nature/files/2018/11/JfUnw39g.jpg' },
    { id: '2', text: 'Racehorses', category: 'selective', img: 'https://racingclub.com/wp-content/uploads/2023/12/Types-of-racehorsejpeg-jpeg-1200x744.webp' },
    { id: '3', text: 'Resistant Bacteria', category: 'natural', img: 'https://images.theconversation.com/files/253435/original/file-20190111-43529-x1iuys.jpg?ixlib=rb-4.1.0&rect=53%2C520%2C5056%2C2528&q=45&auto=format&w=1356&h=668&fit=crop' },
    { id: '4', text: 'Domesticated Dogs', category: 'selective', img: 'https://images.newscientist.com/wp-content/uploads/2021/01/07124405/h2httb_web.jpg' },
    { id: '5', text: 'Peacock Feathers', category: 'natural', img: 'https://images.photowall.com/products/55253/peacock-feathers.jpg?h=699&q=85' },
    { id: '6', text: 'Large-kernel Corn', category: 'selective', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOXICFVJzIzFW1eclpiJa1FWVsvPK4aQPrYKMNYPEkBCQl9Pa8d4mdc1gyQFBneaeu55BKgiyXBFtca0zSAPOzxcwmGT4pqbJdV9iwBhoDtg&s=10' },
    { id: '7', text: 'Peppered Moths', category: 'natural', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Biston.betularia.f.carbonaria.7209.jpg/200px-Biston.betularia.f.carbonaria.7209.jpg' },
    { id: '8', text: 'Broccoli', category: 'selective', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mL5PFzewr3a2-ooN2-PrwdhSd8N-UoAScuY86AJ9nDS16VqIVXxLWyzJ2w0Il35pYcA5zJfcANFMpGqvcHtrZJzfOCPE4SrbaVgweXkA&s=10' },
    { id: '9', text: 'Pesticide Resistance', category: 'natural', img: 'https://blogs.ifas.ufl.edu/sumterco/files/2021/12/Pesticide-Resistance-1024x336.png' },
    { id: '10', text: 'Giraffe Necks', category: 'natural', img: 'https://media.wired.com/photos/65e87742d42c2835f3dd6291/master/w_1600%2Cc_limit/iStock-488580536.jpg' },
    { id: '11', text: 'Arctic Fox Fur', category: 'natural', img: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Vulpes_lagopus_in_Iceland_%28cropped_3%29.jpg' },
    { id: '12', text: 'Cactus Spines', category: 'natural', img: 'https://www.popsci.com/wp-content/uploads/2019/03/18/MUX2ZZ6JPCFYPWSDXE53W7I76Y-e1671209694342.jpg?quality=85&w=2000' },
    { id: '13', text: 'Poison Dart Frogs', category: 'natural', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLTNv5y1xS7_gwodV-x-ZUheCXJIE8hJUFJdx4o9lY6r7jNOWyeQpY4eRoTvlV4gz5opnHxfiooE6iowo6PlM3qP9BtcY4N9mgOBi64eVslw&s=10' },
    { id: '14', text: 'Fast Cheetahs', category: 'natural', img: 'https://www.safariventures.com/wp-content/uploads/Cheeah-Running.jpg' },
    { id: '15', text: 'Meatier Chickens', category: 'selective', img: 'https://thefewellhomestead.com/wp-content/uploads/2021/06/broiler-chicken.png' },
    { id: '16', text: 'Hardy Wheat', category: 'selective', img: 'https://m.media-amazon.com/images/I/71jR1gsv1sL.jpg' },
    { id: '17', text: 'Persian Cats', category: 'selective', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73vrKgTAIPDvewfxJENo3XptLGFATb5bqkqKxBsCl4Fw6ut5IIeTc0FCn034X9dEKpDvAi0kesFaTzguV7PSnuaXGoOf_SYD2lr92aBg&s=10 },
    { id: '18', text: 'High-milk Cows', category: 'selective', img: 'https://www.betterwithdairy.com/sites/default/files/2025-01/holstein.jpg' },
    { id: '19', text: 'Fancy Goldfish', category: 'selective', img: 'https://cdn.shopify.com/s/files/1/0667/6237/5466/files/image2_d47d8a8b-4e5b-4d9d-9db8-a08acd57fc60.jpg?v=1710817140' },
    { id: '20', text: 'Seedless Melons', category: 'selective', img: 'https://www.watermelon.org/wp-content/uploads/2024/12/BEAUTY-SEEDLESS-HALF-CUT_2024jpg-2000x1200.jpg' }
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
