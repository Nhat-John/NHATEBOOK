let listCart = [];

// get data cart from cookie
function checkCart() {
    var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
    if (cookieValue) {
        listCart = JSON.parse(cookieValue.split('=')[1]);
    };
}

checkCart();
addCartToHTML();
function addCartToHTML() {
    // clear data from html
    let listCartHTML = document.querySelector('.return-cart .cart-list');
    listCartHTML.innerHTML = '';
    let totalQuantityHTML = document.querySelector('.cart-total-quantity');
    let totalPriceHTML = document.querySelector('.cart-total-price');

    let totalQuantity = 0;
    let totalPrice = 0;

    // if has prodcut in cart 
    if (listCart) {
        listCart.forEach(product => {
            if (product) {
                let newP = document.createElement('div');
                newP.classList.add('cart-item');
                newP.innerHTML = `<img src="${product.image}" alt="">

                <div class="cart-info">
                    <div class="cart-name">${product.name}</div>
                    <div class="cart-price-wrap">
                        <div class="cart-price cart-price--new">${product.price}</div>
                        <div class="cart-price cart-price--old">${product.old_price}</div>
                    </div>
                </div>

                <div class="cart-quantity">${product.quantity}</div>
                <div class="cart-return-price">
                ${product.price * product.quantity} Nghìn 
                </div>`;
                listCartHTML.appendChild(newP);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.price * product.quantity);
            }
        })
    }
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = totalPrice + ' Nghìn';
}

// btn Checkout 
const btnCheckOut = document.querySelector('.btn-check-out');
const modalCheckOut = document.querySelector('.modal-checkout-wrap');
const cartList = document.querySelector('.cart-list');

function showCorrectCheckOut() {
    // Show modal checkOut 
    modalCheckOut.style.display = 'flex';

    // Click btnCheckOut remove products 
    const returnCart = document.querySelector('.return-cart');
    returnCart.removeChild(cartList);

    // Click btnCheckOut quantity & price to 0
    const cart_total_price = document.querySelector('.cart-total-price');
    const cart_total_quantity = document.querySelector('.cart-total-quantity');

    cart_total_price.innerText = 0;
    cart_total_quantity.innerText = 0;

    // Notify hide in 1 second 
    setTimeout(function () {
        modalCheckOut.style.display = 'none';
    }, 2000)

    // check btnCheckout
    btnCheckOut.disabled = true;
}

btnCheckOut.addEventListener('click', showCorrectCheckOut);

function updateCheckoutButton() {
    // Kiểm tra xem giỏ hàng có còn sản phẩm không
    const hasProducts = document.getElementsByClassName('cart-item').length > 0;

    // Vô hiệu hóa nút thanh toán nếu giỏ hàng trống
    const btnCheckOut = document.querySelector('.btn-check-out');
    btnCheckOut.disabled = !hasProducts;
}

// Gọi hàm này khi khởi động để kiểm tra trạng thái ban đầu
updateCheckoutButton();