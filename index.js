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

novoNome();

function novoNome(){
    opcao = Number(prompt('Quer exibir um novo nome?\n1 - Sim\n2 - Não'));

    if(opcao == 1){
        entradaNome();
    }else if(opcao == 2){
        alert('Obrigado! Até a próxima.🙋‍♂️');
    }else{
        alert('Opção inválida!');
        novoNome();
    }
}

}

entradaNome();
