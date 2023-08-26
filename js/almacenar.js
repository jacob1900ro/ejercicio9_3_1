const btnAddItem = document.getElementById('agregar');
const btnClear = document.getElementById('limpiar');
const listContainer = document.getElementById('contenedor');
const items = JSON.parse(localStorage.getItem('items')) || [];

window.onload = () => {
    addData();
  };

function addData() {
    listContainer.innerHTML = '';
    items.forEach((i) => {
        listContainer.innerHTML += `<li class='liItems'>${i}</li>`;
    });
    document.getElementById('item').value = '';
}

btnAddItem.addEventListener('click', () => {
    const inputItem = document.getElementById('item').value;
    if (inputItem.trim() !== '') {
        items.push(inputItem);
        localStorage.setItem('items', JSON.stringify(items));
        addData();
    } else {
        alert('Los campos deben estar completos')
    }
})

btnClear.addEventListener('click', () => {
    localStorage.removeItem('items');
    listContainer.innerHTML = '';
});

