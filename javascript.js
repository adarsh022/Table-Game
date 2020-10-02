//if we click on the start-reset button
    //if we are playing the game
        //reload the page
    //if we are not playing
        //set the score to the 0
        //show countdown box
        //reduce timer by 1sec in loops
            //check timeleft
                //yes-->continue
                //No--->game-Over
        //change button to reset
        //generate new QnA

//if we click on the answer box
    //if we are playing
        //correct?
            //Yes
                //increase the score
                //show correct box for 1sec
                //Generate new Q&A
            //No
                //Show try again box 1sec

var timer =0;
var score =0;
function gameOver()
{ 
  document.getElementById("gameOver").style.display="block";
  document.getElementById("result").innerHTML= document.getElementById("scoreValue").innerHTML;
  clearInterval(myCounter);
}
function generate()
{ 
  var a,b,c,ansPos;
  a = 1 + Math.round(Math.random()*9);
  b = 1 + Math.round(Math.random()*9);
  document.getElementById("question").innerHTML = a +"x"+ b;
  ansPos = 1+ Math.round(3*Math.random());
  for(var i=1;i<5;i++)
  {
    if(i == ansPos)
    {
      document.getElementById("box"+i).innerHTML = a*b;
      document.getElementById("box"+i).onclick = function(){
        score++;
        document.getElementById("correct").style.display ="block";
        setTimeout(function(){document.getElementById("correct").style.display ="none"},500)
        document.getElementById("scoreValue").innerHTML = score;
        generate();
      }
    }
    else
    {
      document.getElementById("box"+i).onclick = function()
      {
        document.getElementById("wrong").style.display ="block";
        setTimeout(function(){document.getElementById("wrong").style.display ="none"},500)
      }
      if(a == 0)
      {
        document.getElementById("box"+i).innerHTML = (Math.round(Math.random()*10))* (Math.round(Math.random()*10));
      }
      else
      { c = (Math.round(Math.random()*10));
        while( c == b){
          c = (Math.round(Math.random()*10));
        }
        document.getElementById("box"+i).innerHTML = a* c;
      }
    }
  }
}
function check1()
{
  if(timer != 0)
  {
    location.reload();
  }
  else
  {
    document.getElementById("scoreValue").innerHTML = score;
    document.getElementById("timeRemaining").style.display="block";
    var x =0;
    var myCounter = setInterval(function(){x++;var count = 60;timer = count-x;if(timer<=-1){gameOver();};document.getElementById("timeRemainingValue").innerHTML = timer},1000);
    document.getElementById("startReset").innerHTML = "Reset Game";
    generate();
  }
}                