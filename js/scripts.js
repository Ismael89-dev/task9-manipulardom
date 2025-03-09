const form = document.getElementById('form')
const tarefas = [];
form.addEventListener('submit', e =>{
    e.preventDefault();
    const tarefa = document.getElementById('tarefa').value;

    if(!tarefa){
        alert('Preencha o campo da tarefa!');
    }else{
        const listaDeTarefas = document.querySelector('.lista-de-tarefas');
        const result = document.createElement('li');
        const text = document.createElement('span');
        const img = document.createElement('img');
        text.innerText = tarefa;
        text.setAttribute('id', 'js-tarefa')
        result.appendChild(text);
        const removeArea = document.createElement('div');
        removeArea.classList.add('btn-delete');
        img.setAttribute('src', 'bin.png')
        img.setAttribute('id', 'js-btn-delete')
        img.setAttribute('alt', 'Lixeira')
        removeArea.appendChild(img)
        result.appendChild(removeArea);
        listaDeTarefas.appendChild(result)
        tarefas.push(result);

        /*   

        if (localStorage.getItem('tarefas')) {
            localStorage.removeItem('tarefas');
            localStorage.setItem('tarefas', JSON.stringify(tarefas))
        } else {
            localStorage.setItem('tarefas', JSON.stringify(tarefas))
        }
        console.log(localStorage.getItem('tarefas'));
        */
    }
    
});


/* tarefas.forEach((tarefa) =>{

    tarefa.addEventListener('click', () =>{
        tarefa.remove();
    })
});
*/
/* 
const getTarefas = JSON.parse(localStorage.getItem('tarefas'));
if(getTarefas){
    getTarefas.forEach((tarefa) => {
        const listaDeTarefas = document.querySelector('.lista-de-tarefas');
        const result = document.createElement('li');
        const text = document.createElement('span');
        const img = document.createElement('img');
        text.innerText = tarefa;
        text.setAttribute('id', 'js-tarefa')
        result.appendChild(text);
        const removeArea = document.createElement('div');
        removeArea.classList.add('btn-delete');
        img.setAttribute('src', 'bin.png')
        img.setAttribute('id', 'js-btn-delete')
        img.setAttribute('alt', 'Lixeira')
        removeArea.appendChild(img)
        result.appendChild(removeArea);
        listaDeTarefas.appendChild(result)
    });      
}
*/

const listaDeTarefas = document.querySelector('.lista-de-tarefas');

listaDeTarefas.addEventListener('click', e =>{
    if (e.target.tagName === 'IMG') {
        const li = (e.target.parentElement).parentElement;

        li.remove();
    }
})

