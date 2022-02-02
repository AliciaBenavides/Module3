let cart = [];
console.log(cart);

const addToCart = document.getElementById("addToCart");
addToCart.addEventListener("click", buyNow);

function buyNow(){
    cart.push("superstar");
    console.log(cart);
}