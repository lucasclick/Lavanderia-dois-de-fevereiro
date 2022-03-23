let CellBotao = document.querySelector("#responsive-icon")

function AbrirMenu(){
    let NavResponsiva = document.querySelector("#nav")
    if (NavResponsiva.classList.value.indexOf("hidden") == -1) {
        NavResponsiva.classList.add("hidden")
    }
    else{
        NavResponsiva.classList.remove("hidden")
    }
}
CellBotao.addEventListener("click", AbrirMenu)