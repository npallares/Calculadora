const $display = document.getElementById("display")
const $btn = document.querySelectorAll(".btn");
const btn1 = document.getElementById("uno");
let key = 0;
let action = "";
let num = "";
let cont = 0;
let int1 = 0;
let int2 = 0;
let inter = 0;
let calculo = "";
let cuenta = [0,0,0,0,0,0,0,0,0,0,0];
let resultado = 0;

const add = ()=>{
    num = `${num}` + `${key}`;
}

const next = ()=>{
    int1 = num 
    console.log(int1)
    num = "";
}

const next2 = ()=>{
    /* console.log(num) */
    int2 = num ;
    /* console.log(int2) */
    num = "";
}

const dividir = () =>{
    resultado = Number(int1)/Number(int2);
    $display.innerHTML=resultado;
    int1 = resultado;
    num = "";
}

const sumar = () =>{
    console.log(int1)
    console.log(int2)
    resultado = Number(int1) + Number(int2);
    console.log(resultado)
    $display.innerHTML=resultado;
    int1 = resultado;
    num = "";
}


const cuentas =()=>{
cuenta[cont] = num;
console.log(cuenta)
}


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

        if(el.target.matches("#division")){
            cuentas()
           if(cont == 0){
            next();
            cont ++;
           } else{
                  next2();
                  dividir();
                  cont ++;
                 }
        }

        if(el.target.matches("#suma")){
            cuentas()
            if(cont == 0){
                next();
                cont ++;
            } else {
                 next2();
                 sumar();
                 cont ++;
                }   
        }

    })
})

console.log(cuenta)