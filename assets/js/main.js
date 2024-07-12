// Quantity product 
const plus = document.querySelector('.quantity-box__span--plus');
const num = document.querySelector('.quantity-box__span--num');
const minus = document.querySelector('.quantity-box__span--minus');

let a = 1;

plus.addEventListener('click', () => {
    a++;
    num.innerText = a;
})

minus.addEventListener('click', () => {
    if (a > 1) {
        a--;
        num.innerText = a;
    }
})


// Modal option 
const dropdowns = document.querySelectorAll('.product-details-right__modal-dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.product-details-right__modal-select');
    const caret = dropdown.querySelector('.product-details-right__modal-caret-down');
    const menu = dropdown.querySelector('.product-details-right__modal-option');
    const options = dropdown.querySelectorAll('.product-details-right__modal-option li');
    const selected = dropdown.querySelector('.js-modal-selected');

    select.addEventListener('click', () => {
        select.classList.toggle('product-details-right__modal-select-clicked');
        caret.classList.toggle('product-details-right__modal-caret-down-rotate');
        menu.classList.toggle('option-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('product-details-right__modal-select-clicked');
            caret.classList.remove('product-details-right__modal-caret-down-rotate');
            menu.classList.remove('option-open');

            options.forEach(option => {
                option.classList.remove('product-details-right__modal-option-active');
            });

            option.classList.add('product-details-right__modal-option-active');
        });
    });
});


// Modal product details - change btn 
const modalDropdownOpen = document.querySelector('.product-details-right__shipping-address-change');
const modalDropdown = document.querySelector('.product-details-right__modal');
const modalDropdownClose = document.querySelector('.product-details-right__modal-btn-close');
const modalDropdownContainer = document.querySelector('.product-details-right__modal-container');

function showModalDropdown() {
    modalDropdown.classList.add('modal-open');
}

function hideModalDropdown() {
    modalDropdown.classList.remove('modal-open');
}

function stopModal(event) {
    event.stopPropagation();
}

modalDropdownOpen.addEventListener('click', showModalDropdown);
modalDropdownClose.addEventListener('click', hideModalDropdown);
modalDropdown.addEventListener('click', hideModalDropdown);
modalDropdownContainer.addEventListener('click', stopModal);

// Modal endow 1
const btnDetails1 = document.querySelector('.discount-code__right-details--modal-1');
const modalEndow1 = document.querySelector('.endow__modal--1');
const btnCloseEndow1 = document.querySelector('.endow__modal-title--1 i');
const bgModalEndow1 = document.querySelector('.endow__modal-bg--1');

function showModalEndow1() {
    modalEndow1.classList.add('modal-open');
}

function hideModalEndow1() {
    modalEndow1.classList.remove('modal-open');
}

btnDetails1.addEventListener('click', showModalEndow1);
btnCloseEndow1.addEventListener('click', hideModalEndow1);
modalEndow1.addEventListener('click', hideModalEndow1);
bgModalEndow1.addEventListener('click', function (event) {
    event.stopPropagation();
});

// Modal endow 2
const btnDetails2 = document.querySelector('.discount-code__right-details--modal-2');
const modalEndow2 = document.querySelector('.endow__modal--2');
const btnCloseEndow2 = document.querySelector('.endow__modal-title--2 i');
const bgModalEndow2 = document.querySelector('.endow__modal-bg--2');

function showModalEndow2() {
    modalEndow2.classList.add('modal-open');
}

function hideModalEndow2() {
    modalEndow2.classList.remove('modal-open');
}

btnDetails2.addEventListener('click', showModalEndow2);
btnCloseEndow2.addEventListener('click', hideModalEndow2);
modalEndow2.addEventListener('click', hideModalEndow2);
bgModalEndow2.addEventListener('click', function (event) {
    event.stopPropagation();
});

// Modal endow 3
const btnDetails3 = document.querySelector('.discount-code__right-details--modal-3');
const modalEndow3 = document.querySelector('.endow__modal--3');
const btnCloseEndow3 = document.querySelector('.endow__modal-title--3 i');
const bgModalEndow3 = document.querySelector('.endow__modal-bg--3');

function showModalEndow3() {
    modalEndow3.classList.add('modal-open');
}

function hideModalEndow3() {
    modalEndow3.classList.remove('modal-open');
}

btnDetails3.addEventListener('click', showModalEndow3);
btnCloseEndow3.addEventListener('click', hideModalEndow3);
modalEndow3.addEventListener('click', hideModalEndow3);
bgModalEndow3.addEventListener('click', function (event) {
    event.stopPropagation();
});

// Modal endow 4
const btnDetails4 = document.querySelector('.discount-code__right-details--1');
const modalEndow4 = document.querySelector('.endow__modal--4');
const btnCloseEndow4 = document.querySelector('.endow__modal-title--4 i');
const bgModalEndow4 = document.querySelector('.endow__modal-bg--4');

function showModalEndow4() {
    modalEndow4.classList.add('modal-open');
}

function hideModalEndow4() {
    modalEndow4.classList.remove('modal-open');
}

btnDetails4.addEventListener('click', showModalEndow4);
btnCloseEndow4.addEventListener('click', hideModalEndow4);
modalEndow4.addEventListener('click', hideModalEndow4);
bgModalEndow4.addEventListener('click', function (event) {
    event.stopPropagation();
});

// Modal endow 5
const btnDetails5 = document.querySelector('.discount-code__right-details--2');
const modalEndow5 = document.querySelector('.endow__modal--5');
const btnCloseEndow5 = document.querySelector('.endow__modal-title--5 i');
const bgModalEndow5 = document.querySelector('.endow__modal-bg--5');

function showModalEndow5() {
    modalEndow5.classList.add('modal-open');
}

function hideModalEndow5() {
    modalEndow5.classList.remove('modal-open');
}

btnDetails5.addEventListener('click', showModalEndow5);
btnCloseEndow5.addEventListener('click', hideModalEndow5);
modalEndow5.addEventListener('click', hideModalEndow5);
bgModalEndow5.addEventListener('click', function (event) {
    event.stopPropagation();
});

// Modal endow 6
const btnDetails6 = document.querySelector('.discount-code__right-details--3');
const modalEndow6 = document.querySelector('.endow__modal--6');
const btnCloseEndow6 = document.querySelector('.endow__modal-title--6 i');
const bgModalEndow6 = document.querySelector('.endow__modal-bg--6');

function showModalEndow6() {
    modalEndow6.classList.add('modal-open');
}

function hideModalEndow6() {
    modalEndow6.classList.remove('modal-open');
}

btnDetails6.addEventListener('click', showModalEndow6);
btnCloseEndow6.addEventListener('click', hideModalEndow6);
modalEndow6.addEventListener('click', hideModalEndow6);
bgModalEndow6.addEventListener('click', function (event) {
    event.stopPropagation();
});


// Modal attribute 1
const btnAttribute1 = document.querySelector('.product-attribute__item--modal-1');
const modalAttribute1 = document.querySelector('.attribute__modal--1');
const btnCloseAttribute1 = document.querySelector('.attribute__modal-title--1 i');
const bgModalAttribute1 = document.querySelector('.attribute__modal-bg--1');

function showModalAttribute1() {
    modalAttribute1.classList.add('modal-open');
}

function hideModalAttribute1() {
    modalAttribute1.classList.remove('modal-open');
}

btnAttribute1.addEventListener('click', showModalAttribute1);
btnCloseAttribute1.addEventListener('click', hideModalAttribute1);
modalAttribute1.addEventListener('click', hideModalAttribute1);
bgModalAttribute1.addEventListener('click', function (event) {
    event.stopPropagation();
});

// Modal attribute 2
const btnAttribute2 = document.querySelector('.product-attribute__item--modal-2');
const modalAttribute2 = document.querySelector('.attribute__modal--2');
const bgModalAttribute2 = document.querySelector('.attribute__modal-bg--2');
const btnCloseAttribute2 = document.querySelector('.attribute__modal-title--2 i');

function showModalAttribute2() {
    modalAttribute2.classList.add('modal-open');
}

function hideModalAttribute2() {
    modalAttribute2.classList.remove('modal-open');
}

btnAttribute2.addEventListener('click', showModalAttribute2);
btnCloseAttribute2.addEventListener('click', hideModalAttribute2);
modalAttribute2.addEventListener('click', hideModalAttribute2);
bgModalAttribute2.addEventListener('click', function (event) {
    event.stopPropagation();
});


// Modal attribute 3
const btnAttribute3 = document.querySelector('.product-attribute__item--modal-3');
const modalAttribute3 = document.querySelector('.attribute__modal--3');
const bgModalAttribute3 = document.querySelector('.attribute__modal-bg--3');
const btnCloseAttribute3 = document.querySelector('.attribute__modal-title--3 i');

function showModalAttribute3() {
    modalAttribute3.classList.add('modal-open');
}

function hideModalAttribute3() {
    modalAttribute3.classList.remove('modal-open');
}

btnAttribute3.addEventListener('click', showModalAttribute3);
btnCloseAttribute3.addEventListener('click', hideModalAttribute3);
modalAttribute3.addEventListener('click', hideModalAttribute3);
bgModalAttribute3.addEventListener('click', function (event) {
    event.stopPropagation();
});

// product details read more 
const btnReadMore = document.querySelector('.product-details-right__policy-read-more');
btnReadMore.addEventListener('click', showModalAttribute3);