// Relógio e Data
function atualizarHoraEData() {
    let agora = new Date();
    
    let horaCerta = agora.toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo" });
    let dataCerta = agora.toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" });
    
    document.getElementById("meu-relogio").textContent = horaCerta;
    document.getElementById("minha-data").textContent = dataCerta;
}

atualizarHoraEData();
setInterval(atualizarHoraEData, 1000);


// Botão de Mudar Tema e Animação GIF
const btn = document.getElementById('btn');
const animacao = document.getElementById('animacao-tema');

btn.innerHTML = '<img src="./images/lua.png" alt="Lua" class="icone-btn"> Mudar Tema para Escuro';

btn.addEventListener('click', function() {
    // 1. Exibe o GIF da animação
    if (animacao) {
        animacao.classList.add('visivel');
        
        // Esconde o GIF após 800ms (0.8 segundos)
        setTimeout(() => {
            animacao.classList.remove('visivel');
        }, 800);
    }

    // 2. Altera o tema e o conteúdo do botão
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        btn.innerHTML = '<img src="./images/sol.svg" alt="Sol" class="icone-btn"> Mudar Tema para Claro';
    } else {
        btn.innerHTML = '<img src="./images/lua.png" alt="Lua" class="icone-btn"> Mudar Tema para Escuro';
    }
});