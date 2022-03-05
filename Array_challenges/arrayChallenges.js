function alwaysHungry(arr) {
    // your code here 
    for(i = 0; i < arr.length; i++){
        var includes = arr.includes("food")
        if(arr[i] == "food"){
            console.log("yummy");
        }
        else if(!includes){
            console.log("I'm hungry");
            break;
        }
        
    }

}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

///////////////////////////////////////////////////////////

function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for(i = 0; i < arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

///////////////////////////////////////////////////////////

