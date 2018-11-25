
let count = 0;
document.querySelector('.search-field').focus();


document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
        event.preventDefault();
        getListItem();
    }
});

document.querySelector('.submit-btn').addEventListener('click', function() {
    getListItem();
});

document.querySelector('.to-do-builder').addEventListener('click', function(e) {
    let targetItemID = e.target.parentNode.id;
    let targetElement = document.getElementById(targetItemID);

    if (e.target.className == 'remove-item') {
        targetElement.parentNode.removeChild(targetElement);
    }
});

let getListItem = () => {
    let listItem = document.querySelector('.search-field').value;
    
    if (listItem !== '') {
        document.querySelector('.to-do-builder').insertAdjacentHTML('afterbegin',
        `<div class="to-do" id=item-${count}>
            <div class="item">${listItem}</div>
            <div class="remove-item">X</div>
        </div>
        `);

    document.querySelector('.input-form').reset();
    document.querySelector('.search-field').focus();
    count++;
    }
};
