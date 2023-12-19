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
    // Sempre quando clicar na box para abrir
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}


function handleClick(){
    // Adiciona class: boxOpen a classe item, ficando = item boxOpen
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }
    // Verifica as duas cartas abertas e chama a funcao checkMatch
    if(openCards.length == 2){
        setTimeout(checkMatch, 500); 
    }
    console.log(openCards);
    console.log(openCards[0].innerHTML);
}

// Verifica se as duas cartas sao iguais
function checkMatch(){
    // Se forem iguais adiciona a classe item boxMatch
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }
    // Se forem diferentes remove a class boxOpen e as cartas ficam escondidas
    else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    // Apos as verificacoes limpa o vetor
    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Você venceu!!!");
      }
}