function entradaNome() {
    let primeiroNome = prompt('Digite seu primeiro nome:');
    let segundoNome = prompt('Digite seu segundo nome:');

    if (isNaN(primeiroNome) || isNaN(segundoNome)){
    primeiroNome = primeiroNome[0].toUpperCase() + primeiroNome.substring(1);
    segundoNome = segundoNome[0].toUpperCase() + segundoNome.substring(1);

    alert(`Nome completo: ${primeiroNome} ${segundoNome}`);
    segundoNome = segundoNome.toUpperCase();
    alert(`Nome de catálogo: ${segundoNome}, ${primeiroNome}`);
    
}else{
    alert("Digite apenas letras!");
    entradaNome();
    
}
}

entradaNome();
