var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function() {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");    
    //extraindo informações do form
    var  paciente = obtemInformacaoDoPaciente(form);

    //cria a tr e a td do paciente
    var  pacienteTr = montaTr(paciente);

    //adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();

});

function obtemInformacaoDoPaciente(form){
    //aqui os dados inseridos no form será pego e passado para as variaveis dentro da variavel paciente
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc:calculaImc(form.peso.value, form.altura.value)
    }
    //após sua criação e preenchimento o paciente deve ser retornado para ser adcionado a Td(tabela de pacientes)
    return paciente;
}
 
//cria a tr e a td do paciente
function montaTr(paciente){
    // aqui nos criamos a Tr para que ela possa ser preenchida pelas linhas dos dodos dos pacientes
    var pacienteTr = document.createElement("tr");

    //com a fução criada lá em baixo temos que passar o dado e a classe a ser manipulada na td
    var nomeTd = montaTd(paciente.nome,"info-nome");
    var pesoTd = montaTd(paciente.peso,"info-peso");
    var alturaTd = montaTd(paciente.altura,"info-altura");

    //aqui a td criada ja configurada ira ser adicionada a Tr criada   
        //aqui podemos fazer de 2 maneiras usar um  bloco de código que adiciona o dado ex:. nomeTd
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
        //ou ja chamar a função appendChild com a funçao montaTd dentro configurado o dado ex:. pacinete.gordura
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

    //aqui no fazemos o retorno da Tr criada e já preenchida   
    return pacienteTr;
}

function montaTd(dado,classe){
    //aqui o ocdigo ira adicionar a classe que for passada dentro da função a td recebida por ela
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}