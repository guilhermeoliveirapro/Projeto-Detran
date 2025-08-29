function calcular() {
    const vel = Number(document.getElementById('txtvel').value);
    const limite = 80;
    const resultadoDiv = document.getElementById('resultado');
    const needle = document.getElementById('needle');

    if (vel <= limite) {
        resultadoDiv.innerHTML = `✅ Velocidade ${vel} Km/h. Dentro do limite.`;
        resultadoDiv.style.color = '#a5d6a7';
    } else {
        resultadoDiv.innerHTML = `⚠️ Velocidade ${vel} Km/h. Multa aplicada!`;
        resultadoDiv.style.color = '#ef9a9a';
    }

    let angle = (vel / 160) * 180;
    if(angle > 180) angle = 180;
    needle.style.transform = `rotate(${angle}deg)`;
}
function resetar(){
    const resultadoDiv = document.getElementById("resultado");
    const needle = document.getElementById("needle");
    const inputVel = document.getElementById("txtvel");

    // limpa texto
    resultadoDiv.innerHTML = "";
    resultadoDiv.style.color = "black";

    // volta agulha para zero
    needle.style.transform = "rotate(0deg)";

    // limpa input
    inputVel.value = "";
}
