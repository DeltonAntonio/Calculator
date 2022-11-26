let text = document.getElementById("text");
let elements = document.getElementsByTagName("button"); 
console.log(elements);
for( let c = 0; c< elements.length; c++){
    
    
    elements[c].addEventListener('click',()=>{
        console.log(elements[c].value);
        if(elements[c].value == "CE" || elements[c].value =="C"){
            text.value = "";
        }
        if(elements[c].value != "=" && elements[c].value != "CE" && elements[c].value != "C"  ){
            text.value += elements[c].value;
        }
        if(elements[c].value =="="){
            text.value = eval(text.value);
        }
    })
    
}