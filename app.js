let cart = [];
console.log(cart);

const addToCart = document.getElementById("addToCart");
addToCart.addEventListener("click", buyNow);

function buyNow(){  //function
    cart.push("superstar");
    console.log(cart);
}

function add(num1, num2) {  //parameter
    console.log(num1+num2);
}

add(4, 4);


const shoe = {type:"Superstar", year:"2022", color:"white"}; //object with properties
    console.log(shoe);


const person = {  //method
        firstName: "Alicia",
        lastName: "Benavides",
        id: 5566,
        fullName: function() {
          return this.firstName + " " + this.lastName;
        console.log(fullName);}
}