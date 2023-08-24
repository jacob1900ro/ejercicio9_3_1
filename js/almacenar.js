const btnAddItem = document.getElementById('agregar');
const btnClear = document.getElementById('limpiar');

const listContainer = document.getElementById('contenedor');

btnAddItem.addEventListener('click', () => {
    const inputItem = document.getElementById('item').value;
    if (inputItem.trim() !== '') {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        items.push(inputItem);
        localStorage.setItem('items', JSON.stringify(items));
        listContainer.innerHTML = '';
        items.forEach((i) => {
            listContainer.innerHTML += `<li class='liItems'>${i}</li>`;
        });
        document.getElementById('item').value = '';
    } else {
        alert('Los campos deben estar completos')
    }


})

btnClear.addEventListener('click', () => {
    localStorage.removeItem('items');
    const clearList = document.querySelectorAll('.liItems');
    clearList.forEach((x) => {
        x.remove();
    })
});