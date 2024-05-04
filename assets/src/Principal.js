
const Contatos = document.getElementById("contatos");
const Contatos_popup = document.getElementById("contato-popup")
const Fechar_popup = document.getElementById("fechar-popup")

Contatos.onclick = function() {
    Contatos_popup.showModal()
}

Fechar_popup.onclick = function(){
    Contatos_popup.close()
}

document.addEventListener("DOMContentLoaded", function() {
    let botoesSecao = document.querySelectorAll(".hotbar-btn");

    botoesSecao.forEach(function(botao) {
        botao.addEventListener("click", function() {
            let alvo = document.querySelector(this.getAttribute("data-target"));
            if (alvo) {
                alvo.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});