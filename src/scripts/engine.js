// Armazena os emojis
const emojis = ["🐶","🐶","🐱", "🐱","🐮","🐮","🐭","🐭","🐸","🐸","🐔","🐔"]; 
// Armazena os cards selecionados
let openCards = [];

let shuffleEmojis = emojis.sort(()=> (Math.random()> 0.5 ? 2 : -1));

for(let i=0; i < emojis.length; i++){

    // Criando dinamicamente os itens com os emojis> class no css: .itens
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    document.querySelector(".game").appendChild(box);
}