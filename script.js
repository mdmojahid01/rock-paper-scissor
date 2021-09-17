var  rock = 1, paper = 2, scissor = 3;
// function load(){
//     var bdy=document.getElementById("bdy");
//     bdy.style.cssText="display:block;";
//     var gif=document.getElementById("loading");
//     gif.style.cssText="color:black;position:absolute;top:40%;left:40%;z-index:2;" ;
// }
// var count=0;
// var pcount=document.getElementById('pcount');
// var wcount=document.getElementById('wcount');
// var lcount=document.getElementById('lcount');



// btn.onclick = function () {
//   count++;
//   disp.innerHTML = count;
// }


// -----------------------------------------------------------------------------
function win(user,computer){
    var win=document.getElementById("modal-win");
    win.style.cssText="display:block";
    var result=document.getElementById('choose1');
    result.innerHTML="You Choose : "+user+", Computer Choose : "+computer;

}
function tie(user1,computer1){
    var loss=document.getElementById("modal-tie");
    loss.style.cssText="display:block";
    var result=document.getElementById('choose2');
    result.innerHTML="You and Computer - Both Choose same : "+user1;

}
function loss(user2,computer2){
    var loss=document.getElementById("modal-loss");
    loss.style.cssText="display:block";
    var result=document.getElementById('choose3');
    result.innerHTML="You Choose : "+user2+", Computer Choose : "+computer2;

}
function hide(){
    // var hide=document.getElementById("modal-win");
    // hide.style.cssText="display:none";
    // var loss=document.getElementById("modal-loss");
    // loss.style.cssText="display:none";
    var hide=document.getElementById("hide");
    hide.style.cssText="display:none";
   location.reload();



}
function fun1(){
   var rock=document.getElementById("rock");
   var user=rock.value;
   var computer = Math.floor((Math.random() *3) + 1);
// ---------------------------------------------------

// rock.onclick = function () {
//   count++;
//   pcount.innerHTML = count;
// }



  //  -----------------------------------------------
   if (user == computer){
    //document.write("You and Computer - both Choose Same.<br>So That Match tie : ");
    tie("Rock","Rock");
   }

   else if(computer == paper){
    // document.write("You choose Rock and Computer choose Paper.\nSo that  Computer win!");
        loss("Rock","Paper");
   }
           
 else if(computer == scissor){
   // document.write("You choose Rock and Computer choose Scissor.\nSo that You win!");
   win("Rock","Scissor");
 }
        
  


}
function fun2(){
    var user=document.getElementById("paper").value;
    computer=Math.floor((Math.random() *3) + 1);
    if (user == computer){
        //document.write("You and Computer - both Choose Same.<br>So That Match tie : ");
        tie("Paper","Paper");
       }
    
       else if(computer == rock){
       // document.write("You choose paper and Computer choose rock.\nSo that  you  win!");
        win("Paper","Rock");
       }
               
     else if(computer == scissor){
       // document.write("You choose paper and Computer choose Scissor.\nSo that computer wins! ");
       loss("Paper","Scissor");
     }
 }
 function fun3(){
    var user=document.getElementById("scissor").value;
    var computer=Math.floor((Math.random() *3) + 1);
    if (user == computer){
       // document.write("You and Computer - both Choose Same.<br>So That Match tie : ");
       tie("Scissor","Scissor");
       }
    
       else if(computer == paper){
       // document.write("You choose Scissor and Computer choose Paper.\nSo that You win!");
       win("Scissor","Paper");
    
       }
               
     else if(computer == rock){
        //document.write("You choose scissor and Computer choose rock.\nSo that computer wins! ");
        loss("Scissor","Rock");
     }
 }


