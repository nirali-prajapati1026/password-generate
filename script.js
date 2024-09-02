let lowercase="abcdefghijklmnopqrstuvwzyz";
let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number="0123456789";
let symbols="@#$()_-&";



let passwordinput=document.getElementById('passwordinput');
let passwordlength=document.getElementById("passwordlength");
let upper=document.getElementById("uppercase");
let lower=document.getElementById("lowercase");
let num=document.getElementById("number");
let symbol=document.getElementById("symbol");





function ganretnumber(data){
   return data[ Math.floor( Math.random()*data.length)];
    
}
//ganretnumber(uppercase);

function genret(password=""){
    if(upper.checked){
      password+= ganretnumber(uppercase);
    }
    if(lower.checked){
        password+= ganretnumber(lowercase);
      }
      if(num.checked){
        password+= ganretnumber(number);
      }
      if(symbol.checked){
        password+= ganretnumber(symbols);
      }

      if(password.length<passwordlength.value){
          return genret(passwordinput.value);
      }
      
     

}

//genret();
function myfun(){
    genret();
}
