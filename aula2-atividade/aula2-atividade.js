var jogador = "X";
var vencedor =null;
var jogadorSelecionado = document.getElementById("jogador-selecionado");
var vencedorSelecionado = document.getElementById("ganhador");



function escolherQuadrado(id){
    let quadrado = document.getElementById(id);

    if(quadrado.innerHTML !== "-"){
        return;
    }
    
    quadrado.innerHTML = jogador;
    quadrado.style.color = "#000";

    
    jogador === "X"?(jogador="O") : (jogador="X");

    jogadorSelecionado.innerHTML=jogador;

}

function resetar(){
    for(let i =1; i<=9;i++){
        let quadrado =document.getElementById(i);
        quadrado.innerHTML = "-";
        quadrado.style.color = "#eee";
    }
}