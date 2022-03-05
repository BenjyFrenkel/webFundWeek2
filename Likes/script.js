var neilLikes = 0;
var nicoleLikes = 0;
var jimLikes = 0;
function neilHandler(element){
    var likeCount = document.querySelector(".neilCounter")
    neilLikes ++
    console.log(element)
    if(neilLikes == 1){
        likeCount.innerText = neilLikes + " Like" 
    }
    else{
        likeCount.innerText = neilLikes + " Like(s)"
    }
}
function nicoleHandler(element){
    var likeCount = document.querySelector(".nicoleCounter")
    nicoleLikes ++
    console.log(element)
    if(nicoleLikes == 1){
        likeCount.innerText = nicoleLikes + " Like" 
    }
    else{
        likeCount.innerText = nicoleLikes + " Like(s)"
    }
}
function jimHandler(element){
    var likeCount = document.querySelector(".jimCounter")
    jimLikes ++
    console.log(element)
    if(jimLikes == 1){
        likeCount.innerText = jimLikes + " Like" 
    }
    else{
        likeCount.innerText = jimLikes + " Like(s)"
    }
}