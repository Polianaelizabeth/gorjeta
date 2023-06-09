function soma(event){

    event.preventDefault();
    var conta = document.getElementById("vconta").value;
    var gorjeta = document.getElementById("qservico").value;
    var pess = document.getElementById("qpes").value;

    if (pess<1 | conta <1 ){
        alert("valor inválido");
        return;
    }

    var total = conta*gorjeta/pess;
    total = total.toFixed(2);
    document.getElementById("vresult").innerHTML = total;
    document.getElementById("resultado").style.display="block"

    if (pess>1){
        document.getElementById("maisp").style.display="block"
    }

}
document.getElementById("resultado").style.display="none"
document.getElementById("maisp").style.display="none"

document.getElementById("form").addEventListener('submit', soma)

