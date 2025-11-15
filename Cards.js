function deleteCard(id){
    document.getElementById(id).remove();
}

const todoAddCard  = document.getElementById('todo-add-card');
const doingAddCard = document.getElementById('doing-add-card');
const doneAddCard  = document.getElementById('done-add-card');

const modalAddCard = document.getElementById('modal-add-card');

todoAddCard.addEventListener('click', e =>{
    modalAddCard.showModal();

    document.getElementById("save-card-button").addEventListener('click', e => {
        var title        = document.getElementById('title-input-modal').value;
        var description  = document.getElementById('descri-input-modal').value;
        var date         = document.getElementById('date-input-modal').value;
        const newCardEmpty = document.createElement("div");
        const newId        = ("card-" + crypto.randomUUID().toString()).toString(); 
        newCardEmpty.id    = newId; 
        const newCardCode  = `
                <h3>${title}</h3>
                <p>${description}</p>
                <p>${date}</p>
                <button onclick="deleteCard('${newId}')">Excluir</button>
        `;
        newCardEmpty.innerHTML = newCardCode;
        newCardEmpty.classList.add('card');

        const columnTodo = document.getElementById('todo').appendChild(newCardEmpty);
    })

    document.getElementById("cancel-card-button").addEventListener('click', e => {
        modalAddCard.close();
    })

});














doingAddCard.addEventListener('click', e =>{
    modalAddCard.showModal();

    document.getElementById("save-card-button").addEventListener('click', e => {
        var title        = document.getElementById('title-input-modal').value;
        var description  = document.getElementById('descri-input-modal').value;
        var date         = document.getElementById('date-input-modal').value;
        const newCardEmpty = document.createElement("div");
        const newId        = ("card-" + crypto.randomUUID().toString()).toString(); 
        newCardEmpty.id    = newId; 
        const newCardCode  = `
                <h3>${title}</h3>
                <p>${description}</p>
                <p>${date}</p>
                <button onclick="deleteCard('${newId}')">Excluir</button>
        `;
        newCardEmpty.innerHTML = newCardCode;
        newCardEmpty.classList.add('card');

        const columnDoing = document.getElementById('doing').appendChild(newCardEmpty);
    })

    document.getElementById("cancel-card-button").addEventListener('click', e => {
        modalAddCard.close();
    })

});























doneAddCard.addEventListener('click', e =>{
    modalAddCard.showModal();

    document.getElementById("save-card-button").addEventListener('click', e => {
        var title        = document.getElementById('title-input-modal').value;
        var description  = document.getElementById('descri-input-modal').value;
        var date         = document.getElementById('date-input-modal').value;
        const newCardEmpty = document.createElement("div");
        const newId        = ("card-" + crypto.randomUUID().toString()).toString(); 
        newCardEmpty.id    = newId; 
        const newCardCode  = `
                <h3>${title}</h3>
                <p>${description}</p>
                <p>${date}</p>
                <button onclick="deleteCard('${newId}')">Excluir</button>
        `;
        newCardEmpty.innerHTML = newCardCode;
        newCardEmpty.classList.add('card');

        const columnDone = document.getElementById('done').appendChild(newCardEmpty);
    })

    document.getElementById("cancel-card-button").addEventListener('click', e => {
        modalAddCard.close();
    })

});