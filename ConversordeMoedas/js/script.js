var taxasDolarCambio = {
    EUR: 0.93,
    Reais: 4.91,
    ARS: 349.98,
    IenesJP: 151.60,
    SDG: 601.00,
    BTC: 36441.09
};

function converterMoeda() {
    const nomeUsuario = document.getElementById("nomeUsuario").value;
    const valorDolar = parseFloat(document.getElementById("valorDolar").value);
    const para = document.getElementById("para").value;

    if (!nomeUsuario || isNaN(valorDolar) || !taxasDolarCambio[para]) {
        alert("Por favor, insira um nome, um valor válido e selecione uma moeda para proceguirmos com a conversão.");
        return;
    }

    var valorConvertido = (valorDolar * taxasDolarCambio[para]).toFixed(2);

    alert(`Olá ${nomeUsuario}, ${valorDolar} USD é igual a ${valorConvertido} ${para}`);
}