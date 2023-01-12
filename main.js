// create function generateBlocks() 
let container = document.getElementById('container');

function generateBlocks() {
    for (let i = 0; i < 25; i++) {
        const div = document.createElement('div');
        div.className = 'boxColor'
        div.style.background = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
        container.append(div);
    }
}
generateBlocks();

// create function generateBlocksInterval() 
const smallBox = document.querySelectorAll('.boxColor');

function generateBlocksInterval() {
    setInterval(() => {
        for (const iterator of smallBox) {
            iterator.style.background = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
        }
    }, 3000)
}
generateBlocksInterval();