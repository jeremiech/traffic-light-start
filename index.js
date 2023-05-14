function validatePIN (pin) {
   let message=""
  if(typeof pin!='number'){
    
    return false;
  }
  let inputString=String(pin)
 for(let i=1;i<=inputString;i++){
    if(inputString.length<4 || inputString.length==5){
       message=false
    }
    if(inputString.length>6){
       message=false
    }if(inputString.length==6 || inputString.length==4){
       message=true
    }
    
    
 }
 return message
 }
console.log(validatePIN(1234))