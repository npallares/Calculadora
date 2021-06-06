const $display = document.getElementById("display")
const $btn = document.querySelectorAll(".btn");
const $error = document.getElementById("error");
let indexReinicio=0;
let action = "";
let num = "";
let contInt = 0;
let int1 = 0;
let int2 = 0;
let resultado = 0;

const add = ()=>{
    num = `${num}` + `${key}`;
}

const borrar = () =>{
    let borrar = 1;
    let parsialNum = 0;
    let parsial = num;
    parsial = parsial.toString();
    parsialNum = parsial.length-1;
    parsial=Number(parsial.substring(0,parsialNum));
    num=parsial;
}

const iterador1 = ()=>{
    int1 = Number(num);
    num = "";
}

const iterador2= ()=>{
    int2 = Number(num);
    num = "";
}

const reinicio =() =>{
    $display.classList.add("disp-none");
    $error.classList.remove("disp-none");
    for (let i = 1; i != 19; i++) {
        $btn[i].id=`${$btn[i].id}-n`;
        $btn[i].classList.add("nulo");
        /* console.log($btn[i].id) */
        indexReinicio=1;
    }
}


const mostrarResultado = () =>{
    if(action=== "+"){
        resultado = int1 + int2;
        int1 = resultado;
        }

        if(action=== "-"){
        resultado = int1 - int2;
        int1 = resultado;
        }

        if(action=== "*"){
        resultado = int1*int2;
        int1 = resultado;
        }

        if(action=== "/"){
            resultado = int1/int2;
            if(resultado == Infinity){
                resultado="No se puede";
                int1=0;
                int2=0;
                key = "";
                num=0;
                add();
                contInt = 0;
                reinicio();
            }else {
                    int1 = resultado; 
                    }
        }

        let parcial = resultado.toString()
        if(parcial.length > 11){
            parcial=parcial.substring(0,11);
            resultado = parcial;
        }
}
//-----------------LISTENERS----------------

$btn.forEach((e)=>{
    e.addEventListener("click",(el)=>{
        
        if(el.target.matches("#uno")){
            /* console.log("1"); */
            key = 1;
            add();
            $display.innerHTML=num;
        }
        if(el.target.matches("#dos")){
            /* console.log("2"); */
            key = 2;
            add();
            $display.innerHTML=num;
        }
        if(el.target.matches("#tres")){
            /* console.log("3"); */
            key = 3;
            add();
            $display.innerHTML=num;
        }
        if(el.target.matches("#cuatro")){
            /* console.log("4"); */
            key = 4;
            add();
            $display.innerHTML=num;
        }
        if(el.target.matches("#cinco")){
           /*  console.log("5"); */
            key = 5;
            add();
            $display.innerHTML=num;
        }
        if(el.target.matches("#seis")){
            /* console.log("6"); */
            key = 6;
            add();
            $display.innerHTML=num;
        }
        if(el.target.matches("#siete")){
            /* console.log("7"); */
            key = 7;
            add();
            $display.innerHTML=num;
        }
        if(el.target.matches("#ocho")){
            /* console.log("8"); */
            key = 8;
            add();
            $display.innerHTML=num;
        }
        if(el.target.matches("#nueve")){
            /* console.log("9"); */
            key = 9;
            add();
            $display.innerHTML=num;
        }
        if(el.target.matches("#cero")){
           /*  console.log("0"); */
            key = 0;
            add();
            $display.innerHTML=num;
        }
        if(el.target.matches("#punto")){
           /*  console.log("0"); */
            key = ".";
            add();
            $display.innerHTML=num;
        }
        if(el.target.matches("#clear")){
            if(indexReinicio == 1){
             $display.classList.remove("disp-none");
             $error.classList.add("disp-none");
             for (let i = 1; i != 19; i++){
                let newID = $btn[i].id;
                newID=newID.replace("-n","");
                $btn[i].id=newID;
                $btn[i].classList.remove("nulo");
                indexReinicio=0;
                }
            }
             int1=0;
             int2=0;
             key = "";
             num="";
             add();
             contInt = 0;
             $display.innerHTML=num;
         }
         
         if(el.target.matches("#borrar")){
             console.log("Borrar");
             borrar();
             $display.innerHTML=num;
         }

        //*********************************/

        if(el.target.matches("#suma")){
            if(contInt == 0){
                iterador1();
            } else{
                iterador2();
                mostrarResultado();
                $display.innerHTML=resultado;
            }
            action = "+";
            contInt = 1;
        }

        if(el.target.matches("#resta")){
            if(contInt == 0){
                iterador1();
            } else{
                iterador2();
                mostrarResultado();
                $display.innerHTML=resultado;
            }
            action = "-";
            contInt = 1;
        }
        
        if(el.target.matches("#multiplicacion")){
            if(contInt == 0){
                iterador1();
            } else{
                iterador2();
                mostrarResultado();
                $display.innerHTML=resultado;
            }
            action = "*";
            contInt=1;
        }

        if(el.target.matches("#division")){
            if(contInt == 0){
                iterador1();
            } else{
                iterador2();
                mostrarResultado();
                $display.innerHTML=resultado;
            }
            action = "/";
            contInt=1;
        }

        if(el.target.matches("#igual")){
                iterador2();
                mostrarResultado();
                $display.innerHTML=resultado;
                num=resultado;
                contInt=0;
        }
    })
})