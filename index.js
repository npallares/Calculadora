const $display = document.getElementById("display")
const $btn = document.querySelectorAll(".btn");
const btn1 = document.getElementById("uno");

let action = "";
let num = "";
let contInt = 0;
let int1 = 0;
let int2 = 0;
let resultado = 0;

const add = ()=>{
    num = `${num}` + `${key}`;
}

const iterador1 = ()=>{
    int1 = Number(num)
    console.log("int1 " + int1)
    num = "";
}

const iterador2= ()=>{
    int2 = Number(num) ;
    console.log("int2 " + int2)
    num = "";
}


const iterador3= ()=>{
    int2 = Number(num);
    console.log("int2 " + int2)
}

const mostrarResultado = () =>{
    if(action=== "+"){
        resultado = int1 + int2;
        int1 = resultado
        }

        if(action=== "-"){
        resultado = int1 - int2;
        int1 = resultado
        }

        if(action=== "*"){
        resultado = int1*int2;
        int1 = resultado
        }

        if(action=== "/"){
        resultado = int1/int2;
        int1 = resultado
        }
}

//-----------------LISTENERS----------------

$btn.forEach((e)=>{
    e.addEventListener("click",(el)=>{
        
        if(el.target.matches("#uno")){
            /* console.log("1"); */
            key = 1;
            add()
            $display.innerHTML=num
        }
        if(el.target.matches("#dos")){
            /* console.log("2"); */
            key = 2;
            add()
            $display.innerHTML=num
        }
        if(el.target.matches("#tres")){
            /* console.log("3"); */
            key = 3;
            add()
            $display.innerHTML=num
        }
        if(el.target.matches("#cuatro")){
            /* console.log("4"); */
            key = 4;
            add()
            $display.innerHTML=num
        }
        if(el.target.matches("#cinco")){
           /*  console.log("5"); */
            key = 5;
            add()
            $display.innerHTML=num
        }
        if(el.target.matches("#seis")){
            /* console.log("6"); */
            key = 6;
            add()
            $display.innerHTML=num
        }
        if(el.target.matches("#siete")){
            /* console.log("7"); */
            key = 7;
            add()
            $display.innerHTML=num
        }
        if(el.target.matches("#ocho")){
            /* console.log("8"); */
            key = 8;
            add()
            $display.innerHTML=num
        }
        if(el.target.matches("#nueve")){
            /* console.log("9"); */
            key = 9;
            add()
            $display.innerHTML=num
        }
        if(el.target.matches("#cero")){
           /*  console.log("0"); */
            key = 0;
            add()
            $display.innerHTML=num
        }

        //*********************************/

        if(el.target.matches("#suma")){
            if(contInt == 0){
                iterador1()
            } else{
                iterador2()
                mostrarResultado()
                $display.innerHTML=resultado
            }
            action = "+";
            contInt = 1
        }

        if(el.target.matches("#resta")){
            if(contInt == 0){
                iterador1()
            } else{
                iterador2()
                mostrarResultado()
                $display.innerHTML=resultado
            }
            action = "-";
            contInt = 1;
        }
        
        if(el.target.matches("#multiplicacion")){
            if(contInt == 0){
                iterador1()
            } else{
                iterador2()
                mostrarResultado()
                $display.innerHTML=resultado
            }
            action = "*";
            contInt=1;
        }

        if(el.target.matches("#division")){
            if(contInt == 0){
                iterador1()
            } else{
                iterador2()
                mostrarResultado()
                $display.innerHTML=resultado
            }
            action = "/";
            contInt=1;
        }

        if(el.target.matches("#igual")){
            if(action == "/" || action == "*" ){
                iterador3()
                console.log("HOLA")
                mostrarResultado()
                $display.innerHTML=resultado
            } else{
                iterador2()
                mostrarResultado()
                $display.innerHTML=resultado
            }
            contInt=1;
        }
    })
})

document.addEventListener("click",()=>{
    console.log(action)
})