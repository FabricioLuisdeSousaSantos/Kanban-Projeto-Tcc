function deleteCard(id){
    document.getElementById(id).remove();
}

const todoAddCard  = document.getElementById('todo-add-card');
const modalAddCard = document.getElementById('modal-add-card');

const saveButton   = document.getElementById('save-card-button');
const cancelButton = document.getElementById('cancel-card-button');

saveButton.addEventListener('click', handleSaveCard);
cancelButton.addEventListener('click', () => modalAddCard.close());

function handleSaveCard() {
    const title       = document.getElementById('title-input-modal').value;
    const description = document.getElementById('descri-input-modal').value;
    const date        = document.getElementById('date-input-modal').value;

    if (!title && !description && !date){
        modalAddCard.close();
        return ;
    }

    const newCardEmpty = document.createElement("div");
    const newId        = "card-" + crypto.randomUUID();
    newCardEmpty.id    = newId;
    newCardEmpty.classList.add('card');

    newCardEmpty.innerHTML = `
        <h3 contenteditable="true">${title}</h3>
        <p contenteditable="true" >${description}</p>
        <p contenteditable="true" >${date}</p>
        <button onclick="deleteCard('${newId}')">Excluir</button>
    `;

    document.getElementById('todo').appendChild(newCardEmpty);

    document.getElementById('title-input-modal').value = '';
    document.getElementById('descri-input-modal').value = '';
    document.getElementById('date-input-modal').value = '';
    modalAddCard.close();
}

todoAddCard.addEventListener('click', () => {
    modalAddCard.showModal();
});