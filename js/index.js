

   
let input = document.getElementById('btn1');
let input1 = document.getElementById('btn3');
let input2 = document.getElementById('btn5');
let input3 = document.getElementById('btn7');

let result=0

function validate()
 {
   result=0
 if ( input.value ==12 )

  {

    document.getElementById('btn2').innerHTML='Great job!';
     document.getElementById('btn2').style.color ='green';
      result+=1;
   
   } 
      else 
     {
        document.getElementById('btn2').innerHTML="wrong ancwer";
        document.getElementById('btn2').style.color ='red';
      
  
     }
     if ( input1.value== "blue" )
  {
    document.getElementById('btn4').innerHTML='Great job!';
   document.getElementById('btn4').style.color ='green';
   result+=1;
   
   
   } 
      else 
     {
        document.getElementById('btn4').innerHTML="wrong ancwer";
        document.getElementById('btn4').style.color ='red';
  
     }
     if ( input2.value ==2024 )
  {
    document.getElementById('btn6').innerHTML='Great job!';
   document.getElementById('btn6').style.color ='green';


   result+=1;

   } 
      else 
     {
        document.getElementById('btn6').innerHTML="wrong ancwer";
        document.getElementById('btn6').style.color ='red';

  
     }
     if ( input3.value ==6)
     {
       document.getElementById('btn8').innerHTML='Great job!';
      document.getElementById('btn8').style.color ='green';

      result+=1;

      } 
         else 
        {
           document.getElementById('btn8').innerHTML="wrong ancwer";
           document.getElementById('btn8').style.color ='red';
         
     
        }
        document.getElementById("btn9").innerHTML=result;
        
        document.getElementById('btn9').style.color ='white';
        document.getElementById('btn9').style.width ="100px";
        document.getElementById('btn9').style.height ="5vh";


        
        
}

