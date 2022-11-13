//array for user to copy
const arr1 = [];
//array inputed by player
const arr2 = [];
//variable for comparing user input and pattern


//adding key function to start game

    document.addEventListener("keypress",evntAdd);
   window.addEventListener("click",evntAdd);

function evntAdd(){
    document.querySelector("#level-title").innerHTML = "level 1";
    let x = Math.floor(Math.random()*4) + 1 ;
    arr1.push(x);
    nxtStep(x);
    let numberOfBtn=document.querySelectorAll(`.btn`).length;
for (i=0;i<numberOfBtn;i++){
    document.querySelectorAll(`.btn`)[i].addEventListener("click",fn);
    
};}


//function for deciding next atep when game starts

function nxtStep(y){
    if(y==1){
        document.querySelector(".green").classList.add("nxtStp");
        setTimeout(function(){
         document.querySelector(".green").classList.remove("nxtStp");
        },300);
    }else if(y==2){
        document.querySelector(".red").classList.add("nxtStp");
        setTimeout(function(){
            document.querySelector(".red").classList.remove("nxtStp");
           },300);
    }else if(y==3){
        document.querySelector(".yellow").classList.add("nxtStp");
        setTimeout(function(){
            document.querySelector(".yellow").classList.remove("nxtStp");
           },300);
    }else if(y==4){
        document.querySelector(".blue").classList.add("nxtStp");
        setTimeout(function(){
            document.querySelector(".blue").classList.remove("nxtStp");
           },300);
    }
}




function fn(){
    //to remove event listener wike we are in the middle of the game
    document.removeEventListener("keypress",evntAdd);
    let btnValue = this.innerHTML;
    // to add click effect
    let clsList = this.classList;
    clsList.add("pressed");
    setTimeout(function(){
        clsList.remove("pressed");
    },200);
    // for taking input from the player
   if(btnValue==1){
        arr2.push(1);
      sol2();
    
   }else if(btnValue==2){
        arr2.push(2);
      sol2();
    }
   else if(btnValue==3){
    
    arr2.push(3);
   sol2();
    }
   else if (btnValue==4){
    arr2.push(4);
   sol2();
    }
   else{alert("hello");}
}
// main function
function sol2(){
    let len1 = arr1.length;
    let len2 = arr2.length;
    let lenCompare = len1===len2;
    if(lenCompare===true){
        let comparison = JSON.stringify(arr1)===JSON.stringify(arr2);
        if(comparison===true){
            let x = Math.floor(Math.random()*4) + 1 ;
            arr1.push(x);
            setTimeout(nxtStep(x),800);
            // for letting player know which level he is on
             document.querySelector("#level-title").innerHTML = "Level " + arr1.length;
            arr2.length = 0;
        }else{
           gameOver();
        }
    } else if(lenCompare===false){
        let elementComp = arr1[arr2.length-1]===arr2[arr2.length-1];
        if(elementComp===true){
            //do nothing
        }else{
            gameOver();
        }
    }
}
//function when game is over
 function gameOver(){ document.querySelector("#level-title").innerHTML = "Game Over!" + "press any key to restart";
arr1.length=0;
arr2.length=0;
 document.addEventListener("keypress",evntAdd);}
