
let input =document.getElementById('inputBox'); 
let buttons=ducument.querySelectiorAll('button'); 


let string = ""; 
let arr = Array.from(buttons); 
arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
    if(e.target.innerHTML =='='){
        string = eval(string); 
        input.value = string; 
    }
    string +=e.target.innerHTML; 
    input.value = string; 
})})