//Procurar botao
document.querySelector("#add-time")
.addEventListener('click', cloneField)

function cloneField(){
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os compos
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada compo, limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa ele
        field.value = ''
    })

    //colocar na pagina. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}