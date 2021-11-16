/*
ALGORITHM:
By default style 1 selected. and fabric 1 selected.
1. on clicking another style:
    * the style card changes to classname " "
    * the circle div ontop changes to "opt-num-selected"
    * In the display section the respective "womanx" is displayed with dress1-x

2. on clicking fabric.. the classname/id of dress is changes appropriatly




*/



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