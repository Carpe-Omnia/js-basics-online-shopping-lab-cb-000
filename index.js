var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) ;
  var thing = {itemName: item, itemPrice: price} ;
  cart.push(thing) ;
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart === []){return "Your shopping cart is empty"}
  else{
    var thing = "In your cart, you have"
    for (var i = 0 ; i < cart.length - 1 ; i++){
      thing += ` ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
    thing += ` and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
    return thing ;
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
