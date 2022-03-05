function login(element){
    if(element.innerText == "Login"){
        element.innerText = "Log Off"
        console.log(element)
    }
    else{
        element.innerText = "Login"
        console.log(element)
    }
}
function hide(element){
    element.remove();
}
function likes(){
    alert("Ninja was liked")
}