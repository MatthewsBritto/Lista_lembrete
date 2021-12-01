const add = document.getElementById('add')//temp

const getDados = () =>JSON.parse(localStorage.getItem('lista')) ?? [];
//o JSON transforma a lista em string
const setDados = (dados) => localStorage.setItem('lista', JSON.stringify(dados))


function ad_tarefa (tarefa, indice) {
    const item = document.createElement('label');
    item.classList.add('item')
    item.innerHTML = `
        <div>${tarefa}</div>
        <input type="button" value = "X" data-indice = ${indice} >      
    `
    document.getElementById("lista").appendChild(item);
}
//limpa a tela para corrigir erro de acumulo de  att_tela!
const limpar_tela = () => {
    const lista = document.getElementById("lista");
    while (lista.firstChild) {
        lista.removeChild(lista.lastChild);
    }
}
// atualiza a lista 
const att_tela = () => {
    limpar_tela();
    //adiciona nova tarefa e cria um id
    const dados = getDados()
    dados.forEach((item, indice) => ad_tarefa(item.tarefa, indice));
}
const nova_tarefa = (event) => {
    //mostra a tecla pressionada
    const tecla = event.key;
    //pega o texto 
    const texto = event.target.value;
    if (tecla === "Enter") {
        const dados = getDados();
        dados.push ({'tarefa': texto})
        //atualiza a tela pra ver a nova tarefa
        setDados(dados);
        att_tela();
        //limpa o campo de texto
        event.target.value = '';
    }
}

const removeritem = (indice) => {
    //splice remove um item do array com um indice o 1 é ele proprio!
    const dados = getDados();
    dados.splice(indice, 1);
    //manda pro localstorage a lista atualizada
    setDados(dados);
    att_tela();
}
const clickitem = (event) => {
    const elemento = event.target;
    if (elemento.type == 'button'){
        const indice = elemento.dataset.indice 
        removeritem(indice)
    }
}

//temp
document.getElementById("nova_tarefa").addEventListener("keypress", nova_tarefa)
document.getElementById("lista").addEventListener('click', clickitem)

att_tela();


