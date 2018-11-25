
let count = 0;
document.querySelector('.search-field').focus();


document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
        event.preventDefault();
        getListItem();
    }
});

document.querySelector('.add-btn').addEventListener('click', function() {
    getListItem();
});

document.querySelector('.remove-btn').addEventListener('click', function() {
    document.querySelector('.search-field').focus();
    removeListItem();
});

document.querySelector('.to-do-builder').addEventListener('click', function(e) {
    let targetItemID = e.target.parentNode.id;
    let targetElement = document.getElementById(targetItemID);

    console.log(targetElement.firstElementChild);
    if (e.target.className === 'remove-item') {
        targetElement.parentNode.removeChild(targetElement);
    }
    
    if (e.target.classList[0] === 'item-description') {
       targetElement.classList.toggle('item-done');
       targetElement.firstElementChild.classList.toggle('strikethrough');
    }
});

let getListItem = () => {
    let listItem = document.querySelector('.search-field').value;
    
    if (listItem !== '') {
        document.querySelector('.to-do-builder').insertAdjacentHTML('afterbegin',
        `<div class="to-do" id=item-${count}>
            <div class="item-description">${listItem}</div>
            <div class="remove-item">X</div>
        </div>
        `);

    document.querySelector('.input-form').reset();
    document.querySelector('.search-field').focus();
    count++;
    }
};

let removeListItem = () => {
    let toDoArray = document.querySelectorAll('.to-do');

    for (items in toDoArray) {
        document.querySelector('.to-do').remove();
    }
};