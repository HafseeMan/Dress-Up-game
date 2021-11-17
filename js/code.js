/*
ALGORITHM:
By default style 1 selected. and fabric 1 selected.
1. on clicking another style:
    * the style card changes to classname " "
    * the circle div ontop changes to "opt-num-selected"
    * In the display section the respective "womanx" is displayed with dress1-x

2. on clicking fabric.. the classname/id of dress is changes appropriatly




*/


/*
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
*/

var state = 0;

//model display
var woman_display = document.getElementById("woman");
var dress_display = document.getElementById("dress");
//status circle 
var status_circles_s = document.getElementsByClassName('opt-num-s');
var status_circles_f = document.getElementsByClassName('opt-num-s');

//Array of all style options 
var style_options = document.getElementsByClassName("style-option");

//Array of all style options 
var fabric_options = document.getElementsByClassName("fabric-option");

/************* NB: ASSIGNING CLICK EVENT LISTENER TO STYLE OPTIONS NOT WORKING. IT EXECUTES WITHOUT BEING TRIGGERED(CLICK)
for (var i = 0; i < style_options.length; i++){

    //grab id name 
    id = style_options[i].id; 
    
    //assign onclick function to each
    style_options[i].addEventListener('click', setOutfit(id), true);

} 
*/



function setOutfit(selected){
    dressName = selected.id;

    if(dressName == "style-1"){
        woman_display.className = "woman-1";
        dress_display.className = "dress1-1";
        setStatus(1, "style-option")
    }
    else if(dressName == "style-2"){
        woman_display.className = "woman-2";
        dress_display.className = "dress1-2";
        setStatus(2, "style-option")
    }
    else{
        woman_display.className = "woman-3";
        dress_display.className = "dress1-3";
        setStatus(3, "style-option")
    }

}

function setFabric(selected, id){
    fabricName = selected.id;

    //condition: dress displayed depends on woman model displayed
    if( woman_display.classList == "woman-1"){
        dress = "dress"+id+"-1";
        dress_display.className = dress;
        setStatus(1, "fabric-option");
    }
    else if( woman_display.classList == "woman-2"){
        dress = "dress"+id+"-2";
        dress_display.className = dress;
        setStatus(2, "fabric-option");
    }
    else if( woman_display.classList == "woman-3"){
        dress = "dress"+id+"-3";
        dress_display.className = dress;
        setStatus(3, "fabric-option");

    }

}

//selected : 1, 2 or 3
//type: "style-option" or "fabric-option"
/*to set all css corresponding to activation */
function setStatus(num, type){

    //to change option-div to activated
    if (type == "style-option"){

        //loop array of all option-divs and deactivate 
        for( var i = 0; i < style_options.length; i++){
        
            //deactivate all if activated
            if(style_options[i].classList.contains('active-option')){
         
                style_options[i].classList.remove('active-option');
            }
        
            //set selected to activated
            style_options[num-1].classList.add('active-option');
            
            //set status circle
            for (var j = 0; j < status_circles_s.length; j++){
              
                if(status_circles_s[i].classList.contains('opt-num-selected')){
                    status_circles_s[i].classList.remove('opt-num-selected');
                }                
        
                //set corresponding circle to selected
                status_circles_s[num-1].classList.add('opt-num-selected');                
            }
        }
    }

    else if (type == "fabric-option"){
        //loop array of all option-divs and deactivate 
        for( var i = 0; i < fabric_options.length; i++){
        
            //deactivate all if activated
            if(fabric_options[i].classList.contains('fabric-selected')){
         
                fabric_options[i].classList.remove('fabric-selected');
            }
        
            //set selected to activated
            fabric_options[num-1].classList.add('fabric-selected');
            
            //set status circle
            for (var j = 0; j < status_circles_f.length; j++){

                if(status_circles_f[i].classList.contains('opt-num-selected')){
                    status_circles_f[i].classList.remove('opt-num-selected');
                }                
    
                //set corresponding circle to selected
                status_circles_f[num-1].classList.add('opt-num-selected');                
            }
        }
    }

        
        //set circle on top to activated. and loop all other circles to deactivated 
}



//Default state when window loaded
window.onload = init;

function init(){
    woman_display.classList.add('woman-2');
    dress_display.classList.add('dress1-1')
} 