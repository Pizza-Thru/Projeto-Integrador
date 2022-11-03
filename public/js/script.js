// imprimindo comprovante de pedido

const printOrder = document.querySelector(".print").onclick = function () {
    newWindow = window.open( `/pedido-realizado/${this.id}`, "Print-Window", "width=600,height=600");
    newWindow.onload = function () {
        newWindow.print();
    }
}

// Criando barras de progresso dinamicamente
window.onload = function update() {
    let element = document.querySelector(".myprogressBar");
    let width = 1;
    let identity = setInterval(scene, 10);

    let status = document.getElementById('statusOrder').getAttribute('data-id');

    function scene() {
        if (status == "Pagamento Aprovado" || status == "Preparando Pedido") {
            document.getElementById("statusA").style.opacity = "1";
            document.getElementById("statusA").style.border = "#FCBF49 5px solid";
            document.getElementById("textStatusA").textContent = "PAGAMENTO APROVADO";
            element.style.width = 0 + '%'
        }
        else if (status == "Pedido Pronto") {
            document.getElementById("textStatusA").textContent = "PAGAMENTO APROVADO";
            document.getElementById("statusA").style.opacity = "1";
            document.getElementById("statusA").style.border = "#FCBF49 5px solid";
            document.getElementById("textStatusB").textContent = "PEDIDO PRONTO";
            document.getElementById("statusB").style.opacity = "1";
            document.getElementById("statusB").style.border = "#FCBF49 5px solid";

            element.style.width = 50 + '%'
        }
        else if (status == "Finalizado") {
            document.getElementById("textStatusA").textContent = "PAGAMENTO APROVADO";
            document.getElementById("statusA").style.border = "#FCBF49 5px solid";
            document.getElementById("statusA").style.opacity = "1";
            document.getElementById("textStatusB").textContent = "PEDIDO PRONTO";
            document.getElementById("statusB").style.opacity = "1";
            document.getElementById("statusB").style.border = "#FCBF49 5px solid";
            document.getElementById("textStatusC").textContent = "PEDIDO ENTREGUE";
            document.getElementById("statusC").style.opacity = "1";
            document.getElementById("statusC").style.border = "#FCBF49 5px solid";
            element.style.width = 100 + '%'
        }
        else {
            document.getElementById("textStatusA").style.opacity = "0.5";
            document.getElementById("textStatusB").style.opacity = "0.5";
            document.getElementById("textStatusC").style.opacity = "0.5";
            element.style.width = 0 + '%'
        }
    }
}