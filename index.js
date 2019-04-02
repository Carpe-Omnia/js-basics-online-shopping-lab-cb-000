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
  var thing = "In your cart, you have"
  if (cart.length == 0){return "Your shopping cart is empty"}
  else if (cart.length == 1){
    thing += ` ${cart[0].itemName} at $${cart[0].itemPrice}.`
    return thing ;
  }
  else{
    for (var i = 0 ; i < cart.length - 1 ; i++){
      thing += ` ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
    thing += ` and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
    return thing ;
  }
}

function total() {
  var total = 0 ;
  for (var i = 0 ; i < cart.length ; i++){
    total += cart[i].itemPrice ;
  }
  return total ;
}

function removeFromCart(item) {
  var dex = cart.findIndex(function(element){
    return element.itemName == item
  })
  if(!!dex){
    return cart.splice(dex, 1)
  }
  else{
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
