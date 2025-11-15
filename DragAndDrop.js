// Espera o DOM carregar (boa prática)
document.addEventListener('DOMContentLoaded', function () {

    // Aplica o Sortable em TODAS as divs com classe .cards
    document.querySelectorAll('.cards').forEach(container => {
        new Sortable(container, {
            group: 'kanban',           // permite mover entre colunas
            animation: 150,
            ghostClass: 'dragging',    // classe no item fantasma
            draggable: '.card',        // só os .card podem ser arrastados

            // Impede que o link "Adicionar Card" atrapalhe
            filter: '.add-card',
            onFilter: evt => evt.preventDefault(),

            // Evento quando soltar
            onEnd: evt => {
                console.log('Card movido!');
                console.log('De:', evt.from.parentElement.querySelector('.label-column').textContent);
                console.log('Para:', evt.to.parentElement.querySelector('.label-column').textContent);
                console.log('Item:', evt.item.querySelector('h3').textContent);
            }
        });
    });
});
