setInterval(atualizarHora, 1000);
function atualizarHora() {
    let agora = new Date();
    let horaCerta = agora.toLocaleTimeString("pt-BR", {timeZone: "America/Sao_Paulo"});
    document.getElementById("meu-relogio").textContent = horaCerta;
}

// funcao para aparecer a data atual
setInterval(atualizarData, 1000);
function atualizarData() {
    let agora = new Date();
    let dataCerta = agora.toLocaleDateString("pt-BR", {timeZone: "America/Sao_Paulo"});
    document.getElementById("minha-data").textContent = dataCerta;
}

// mudar o tema do site
function mudarCor() {
    let body = document.body;
    body.classList.toggle("dark-theme");
}
