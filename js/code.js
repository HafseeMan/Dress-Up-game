var state = 0;

function nextOutfit(){
    console.log("hello")
    var dress = document.getElementById("dress");
    if(state === 0){
        dress.setAttribute("class","dress1");
        state++;
    }
    else if(state === 1){
        dress.setAttribute("class","dress2");
        state++;
    }
    else{
        dress.setAttribute("class","dress3");
        state = 0;
    }
}


/**Default state when window loaded */
window.onload = init;

function init(){
    state = 0;
}