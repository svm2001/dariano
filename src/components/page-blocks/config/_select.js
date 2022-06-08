if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (let i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

document.querySelectorAll('.dropdown').forEach(function (dropdownWrapper){
    const dropdownBtn = dropdownWrapper.querySelector('.dropdown__button');
    const dropdownList = dropdownWrapper.querySelector('.dropdown__list');
    const dropdownListItems = dropdownList.querySelectorAll('.dropdown__list-item');
    const dropdownInput = dropdownWrapper.querySelector('.dropdown__input-hidden');

    dropdownBtn.addEventListener('click', function (){
        dropdownList.classList.toggle('dropdown__list-visible')
        this.classList.add('dropdown__button--active');
    })

    dropdownListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
            dropdownBtn.innerText =  this.innerText;
            dropdownBtn.focus();
            dropdownInput.value = this.dataset.value;
            dropdownList.classList.remove('dropdown__list-visible');
        })
    })

    document.addEventListener('click', function (e){
        if (e.target !== dropdownBtn) {
            dropdownBtn.classList.remove('dropdown__button--active');
            dropdownList.classList.remove('dropdown__list-visible')

        }
    })
})


function refresh()
{
    window.location.reload();
}
