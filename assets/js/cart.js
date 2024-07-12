let btnOpenCart = document.querySelector('.header__navbar-item--has-quantity');
let cart = document.querySelector('.cart');
let closeBtnCart = document.querySelector('.cart__close');

btnOpenCart.addEventListener('click', () => {
    if (cart.style.right == '-100%') {
        cart.style.right = '0';
    } else {
        cart.style.right = '-100%';
    }
})

closeBtnCart.addEventListener('click', () => {
    cart.style.right = '-100%';
})

let products = null;
// get data from file json
fetch('product.json')
    .then(Response => Response.json())
    .then(data => {
        products = data;
        addDataToHTML();
    })

// show datas in list html
function addDataToHTML() {
    // remove datas default in html
    let listProductHTML = document.querySelector('.flash-sale__book-list');
    listProductHTML.innerHTML = '';

    // add new datas
    if (products != null) {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('flash-sale__book-item');
            newProduct.innerHTML = ` <a href="${product.link}" class="flash-sale__book-link">
            <img src="${product.image}" alt="" width="100%">
            <div class="flash-sale__book-item-content">
                <p class="flash-sale__book-name">
                ${product.name}
                </p>
                <span class="flash-sale__book-price-current">
                    ${product.price} đ
                </span>
                <span class="flash-sale__book-discount">${product.sale}</span>
                <p class="flash-sale__book-price-old">${product.old_price} đ</p>
            </div>
        </a>`;
            listProductHTML.appendChild(newProduct);
        });
    }
}

let listCart = [];
// and i get cookie data cart
function checkCart() {
    var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));

    if (cookieValue) {
        listCart = JSON.parse(cookieValue.split('=')[1]);
    }
}

checkCart();

function addCart($idProduct) {
    let productCopy = JSON.parse(JSON.stringify(products));

    // if this product is not in the cart
    if (!listCart[$idProduct]) {
        let dataProduct = productCopy.filter(
            product => product.id == $idProduct
        )[0];
        // add data product in cart
        listCart[$idProduct] = dataProduct;
        listCart[$idProduct].quantity = 1;
    }
    else {
        // if this proudct is already in the cart
        // i just increased the quantity
        listCart[$idProduct].quantity++;
    }

    // i wil save datas cart in cookie
    // to save this datas cart when i turn of the computer

    // let timeSave = "expires=Thu, 31 Dec 2025 23:59:59 UTC";
    // document.cookie = "listCart=" + JSON.stringify(listCart) + "; " + timeSave + "; path=/;";
    localStorage.setItem("listCart", JSON.stringify(listCart));
    // localStorage.setItem("timeSave", timeSave);
    addCartToHTML();
}
addCartToHTML();
function addCartToHTML() {
    // clear data default
    let listCartHTML = document.querySelector('.list-cart');
    listCartHTML.innerHTML = '';

    // let totalHTML = document.querySelector('.header__navbar-quantity span');
    let totalQuantity = 0;

    if (listCart) {
        listCart.forEach(product => {
            if (product) {
                let newCart = document.createElement('div');
                newCart.classList.add('list-cart__item');
                newCart.innerHTML = `<img src="${product.image}" alt="">
                <div class="list-cart__content">
                    <div class="list-cart__name">
                        ${product.name}
                    </div>

                    <div class="list-cart__price">
                        ${product.price} đ
                    </div>
                </div>

                <div class="list-cart__quantity">
                    <button onclick="changeQuantity(${product.id}, '-')">-</button>
                    <span class="list-cart__quantity-value">
                    ${product.quantity}
                    </span>
                    <button onclick="changeQuantity(${product.id}, '+')">+</button>
                </div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
            }
        })
    }

    totalHTML.innerText = totalQuantity;
}

function changeQuantity($idProduct, $type) {
    switch ($type) {
        case '-':
            listCart[$idProduct].quantity--;
            if (listCart[$idProduct].quantity <= 0) {
                delete listCart[$idProduct];
            }
            break;
        case '+':
            listCart[$idProduct].quantity++;
            break;

        default:
            break;
    }
    // save new data in cookie
    // let timeSave = "expires=Thu, 31 Dec 2025 23:59:59 UTC";
    // document.cookie = "listCart=" + JSON.stringify(listCart) + "; " + timeSave + "; path=/;";
    localStorage.setItem("listCart", JSON.stringify(listCart));
    // reload list cart in HTML
    addCartToHTML();
}