function accept(){ //REMOVING COOKIES BAR
    var remove = document.getElementById("cookies");
    remove.remove();
}
function cart(){//ALERT USER THAT CART IS EMPTY ON CLICK
    alert("Your cart is empty");
}
//CHANGE IMAGE ON HOVER
function over(element){
    element.src = "./assets/succulents-2.jpg"
}
function out(element){
    element.src = "./assets/succulents-1.jpg"
}