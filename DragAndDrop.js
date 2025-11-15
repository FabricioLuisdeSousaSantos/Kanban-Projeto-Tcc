document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.cards').forEach(container => {
        new Sortable(container, {
            group: 'kanban',           
            animation: 150,
            ghostClass: 'dragging',    
            draggable: '.card',        
            filter: '.add-card',
            onFilter: evt => evt.preventDefault(),

            onEnd: evt => {
                console.log('Card movido!');
                console.log('De:', evt.from.parentElement.querySelector('.label-column').textContent);
                console.log('Para:', evt.to.parentElement.querySelector('.label-column').textContent);
                console.log('Item:', evt.item.querySelector('h3').textContent);
            }
        });
    });
});
