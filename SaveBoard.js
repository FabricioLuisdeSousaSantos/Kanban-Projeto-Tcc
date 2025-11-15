window.onload = loadDataBoard;

function saveDataBoard(){
    const todoHTML  = document.getElementById('todo').innerHTML;
    const doingHTML = document.getElementById('doing').innerHTML;
    const doneHTML  = document.getElementById('done').innerHTML;

    localStorage.setItem('todo-cards', todoHTML);
    localStorage.setItem('doing-cards', doingHTML);
    localStorage.setItem('done-cards', doneHTML);
}

function loadDataBoard(){
    todoCardsSpace  = document.getElementById('todo');
    doingCardsSpace = document.getElementById('doing');
    doneCardsSpace  = document.getElementById('done');

    if(localStorage.getItem('todo-cards')){
        todoCardsSpace.innerHTML  = localStorage.getItem('todo-cards'); 
    }
    if(localStorage.getItem('doing-cards')){
        doingCardsSpace.innerHTML = localStorage.getItem('doing-cards'); 
    }
    if(localStorage.getItem('done-cards')){
        doneCardsSpace.innerHTML  = localStorage.getItem('done-cards'); 
    }
}