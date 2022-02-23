//console.log("hello wrld");

//array of all buttons
let buttons = document.getElementsByTagName("button")

//value in the display
let val = "0"

//display area
let display = document.getElementsByClassName("display")[1];

//operations
let operations = [];

//final answer
let finalAns = 0

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",()=>{
        if(buttons[i].innerHTML === "+" || buttons[i].innerHTML === "-" || buttons[i].innerHTML === "*" || buttons[i].innerHTML === "=" || buttons[i].innerHTML === "/"){
            
            //store operators and operands in an array
            operations.push(val);
            operations.push(buttons[i].innerHTML);

            //reset the value of the display once an operator is clicked
            display.innerHTML = "";
            val="0";

            //if the equal sign is clicked, compute answer from values in array (operations)
            if (buttons[i].innerHTML === "="){
                finalAns = Number(operations[0]);
                console.log(finalAns);
                for(let i = 1; i < operations.length-1;i++){
                  if (operations[i] === "+"){
                      finalAns = finalAns+Number(operations[i+1]);
                      console.log(finalAns);
                      i++;
                  }  
                  else if (operations[i] === "-"){
                      finalAns = finalAns-Number(operations[i+1]);
                      i++;
                  }  
                  else if (operations[i] === "*"){
                      finalAns = finalAns*Number(operations[i+1]);
                      i++;
                  }  
                  else if (operations[i] === "/"){
                      finalAns = finalAns/Number(operations[i+1]);
                      i++;
                  }  
                }
                display.innerHTML = finalAns;
                console.log(finalAns);
                operations=[finalAns];   
            }
        }
        else if (buttons[i].innerHTML === "AC"){
            operations=[]
            finalAns = 0
            display.innerHTML = "0"
            val = "0"
        }

        else{
            if(val!=="0"){
                val+=buttons[i].innerHTML;
            }
            else{
                val=buttons[i].innerHTML;
            }
            display.innerHTML = val;
        }
     
    });
    
}


