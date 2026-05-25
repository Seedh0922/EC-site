let productName = document.getElementById("productName");
let productPrice = document.getElementById("price");
let productDescription = document.getElementById("description");
let countText = document.getElementById("count");
let totalText = document.getElementById("All");
let message = document.getElementById("message");
let cartButton = document.getElementById("cartButton");
let buyButton = document.getElementById("buyButton");

let isBought = false;
let isInCart = false;
let count = 1;

let products = [{
    name: "Apple",
    price: 3000,
    description: "맛있는 사과입니다."
},
{
    name: "Banana",
    price: 2000,
    description: "맛있는 바나나입니다."
},
{
    name: "Cherry",
    price: 5000,
    description: "맛있는 체리입니다."
}];

let currentIndex = 0;
let product = products[currentIndex];


productName.innerText = product.name;
productPrice.innerText = product.price;
productDescription.innerText = product.description;

function updateUI() {
    productName.innerText = product.name;
    productPrice.innerText = product.price;
    productDescription.innerText = product.description;
    countText.innerText = count;
    totalText.innerText = count * product.price;
}

function nextProduct() {
    currentIndex++;
    console.log(currentIndex);
    if (currentIndex >= products.length) {
        currentIndex = 0;
    }
    console.log(currentIndex);
    product = products[currentIndex];
    updateUI();
        isInCart = false;
        isBought = false;
        message.innerText = "";
        cartButton.innerText = "장바구니담기";
        buyButton.innerText = "구매하기";
}



function plus() {
    if (isInCart == true) {
        alert("장바구니에 담긴 상품입니다.");
        return;
    }
    if (isBought == true) {
        alert("이미 구매한 상품입니다.");
        return;
    }
    if (count < 10) {
        count = count + 1;
        updateUI();
    } else {
        alert("최대 수량은 10개입니다.");
    }
}


function minus() {
    if (isInCart == true) {
        alert("장바구니에 담긴 상품입니다.");
        return;
    }
    if (isBought == true) {
        alert("이미 구매한 상품입니다.");
        return;
    }
    if (count > 1) {
        count = count - 1;
        updateUI();
    } else {
        alert("최소 수량은 1개입니다.");
    }

}
function toggleCart() {
    if (isBought == true) {
        alert("이미 구매한 상품입니다.");
        return;
    }
    if (isInCart == false) {
        isInCart = true;
        message.innerText = "장바구니에 담겼습니다.";
        message.style.color = "red";
        cartButton.innerText = "장바구니에서 제거";
    } else {
        isInCart = false;
        message.innerText = "장바구니에서 제거되었습니다.";
        message.style.color = "black";
        cartButton.innerText = "장바구니담기";
    }
}

function buyProduct() {
    if (isBought == false) {
        isBought = true;
        isInCart = false;
        message.style.color = "blue";
        message.innerText = "구매가 완료되었습니다.";
        buyButton.innerText = "구매 취소";
        alert("구매가 완료되었습니다.");
    } else {
        isBought = false;
        isInCart = false;
        buyButton.innerText = "구매하기";
        message.innerText = "구매가 취소되었습니다.";
        message.style.color = "black";
        cartButton.innerText = "장바구니담기";
        return;
    }


}