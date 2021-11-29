



const add = document.getElementById('add')
const del = document.getElementById('del')

add.addEventListener("click", ad_tarefa)
del.addEventListener("click", del_tarefa)

function ad_tarefa (tarefa) {
    const item = document.createElement('label');
    item.classList.add('item')
    item.innerHTML = `
        <div> <p> ${tarefa} </p> </div>
        <input type="button" value = "X" ${del} >
        <br>
    `
    document.getElementById("lista").appendChild(item);
}
function del_tarefa () {
    console.log("deletado")
}