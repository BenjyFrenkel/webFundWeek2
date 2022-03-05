function cityClick(element){
    console.dir(element.innerText)
    alert("Loading weather report for: " + element.innerText);
}
function accept(){
    var remove = document.getElementById("cookies");
    remove.remove();
}
function select(element){
    console.log(element.value);
    if(element.value == "f"){
        var highTemp = document.querySelector(".highTemp")
        var lowTemp = document.querySelector(".lowTemp")
        var tomorrowHighTemp = document.querySelector(".tomorrowHighTemp")
        var tomorrowLowTemp = document.querySelector(".tomorrowLowTemp")
        var fridayHighTemp = document.querySelector(".fridayHighTemp")
        var fridayLowTemp = document.querySelector(".fridayLowTemp")
        var saturdayHighTemp = document.querySelector(".saturdayHighTemp")
        var saturdayLowTemp = document.querySelector(".saturdayLowTemp")
        var newHighTemp = (parseInt(highTemp.innerText) * 1.8) + 32;
        var newLowTemp = (parseInt(lowTemp.innerText) * 1.8) + 32;
        var newTomorrowHighTemp = (parseInt(tomorrowHighTemp.innerText) * 1.8) + 32;
        var newTomorrowLowTemp = (parseInt(tomorrowLowTemp.innerText) * 1.8) + 32;
        var newFridayHighTemp = (parseInt(fridayHighTemp.innerText) * 1.8) + 32;
        var newFridayLowTemp = (parseInt(fridayLowTemp.innerText) * 1.8) + 32;
        var newSaturdayHighTemp = (parseInt(saturdayHighTemp.innerText) * 1.8) + 32;
        var newSaturdayLowTemp = (parseInt(saturdayLowTemp.innerText) * 1.8) + 32;
        highTemp.innerText = Math.trunc(newHighTemp) + "˚";
        lowTemp.innerText = Math.trunc(newLowTemp) + "˚";
        tomorrowHighTemp.innerText = Math.trunc(newTomorrowHighTemp) + "˚";
        tomorrowLowTemp.innerText = Math.trunc(newTomorrowLowTemp) + "˚";
        fridayHighTemp.innerText = Math.trunc(newFridayHighTemp) + "˚";
        fridayLowTemp.innerText = Math.trunc(newFridayLowTemp) + "˚";
        saturdayHighTemp.innerText = Math.trunc(newSaturdayHighTemp) + "˚";
        saturdayLowTemp.innerText = Math.trunc(newSaturdayLowTemp) + "˚";
    }
    else if(element.value == "c"){
        var highTemp = document.querySelector(".highTemp")
        var lowTemp = document.querySelector(".lowTemp")
        var tomorrowHighTemp = document.querySelector(".tomorrowHighTemp")
        var tomorrowLowTemp = document.querySelector(".tomorrowLowTemp")
        var fridayHighTemp = document.querySelector(".fridayHighTemp")
        var fridayLowTemp = document.querySelector(".fridayLowTemp")
        var saturdayHighTemp = document.querySelector(".saturdayHighTemp")
        var saturdayLowTemp = document.querySelector(".saturdayLowTemp")
        var newHighTemp = (parseInt(highTemp.innerText) -32) / 1.8;
        var newLowTemp = (parseInt(lowTemp.innerText) -32) / 1.8;
        var newTomorrowHighTemp = (parseInt(tomorrowHighTemp.innerText) -32) / 1.8;
        var newTomorrowLowTemp = (parseInt(tomorrowLowTemp.innerText) -32) / 1.8;
        var newFridayHighTemp = (parseInt(fridayHighTemp.innerText) -32) / 1.8;
        var newFridayLowTemp = (parseInt(fridayLowTemp.innerText) -32) / 1.8;
        var newSaturdayHighTemp = (parseInt(saturdayHighTemp.innerText) -32) / 1.8;
        var newSaturdayLowTemp = (parseInt(saturdayLowTemp.innerText) -32) / 1.8;
        highTemp.innerText = Math.trunc(newHighTemp) + "˚";
        lowTemp.innerText = Math.trunc(newLowTemp) + "˚";
        tomorrowHighTemp.innerText = Math.trunc(newTomorrowHighTemp) + "˚";
        tomorrowLowTemp.innerText = Math.trunc(newTomorrowLowTemp) + "˚";
        fridayHighTemp.innerText = Math.trunc(newFridayHighTemp) + "˚";
        fridayLowTemp.innerText = Math.trunc(newFridayLowTemp) + "˚";
        saturdayHighTemp.innerText = Math.trunc(newSaturdayHighTemp) + "˚";
        saturdayLowTemp.innerText = Math.trunc(newSaturdayLowTemp) + "˚";
    }
}