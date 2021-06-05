const $display = document.getElementById("display")
const $btn = document.querySelectorAll(".btn");
const btn1 = document.getElementById("uno");
let key = "";
let accion = "";
let num = "";
let int1 = 0;
let int2 = 0;
let calculo = "";
let resultado = 0;

const add = ()=>{
    num = `${num}` + `${key}`;
}

$btn.forEach((e)=>{
    e.addEventListener("click",(el)=>{
        
        if(el.target.matches("#uno")){
            console.log("1");
            key = 1;
            add()
            $display.innerHTML=num
        }
        if(el.target.matches("#dos")){
            console.log("2");
            key = 2;
            add()
            $display.innerHTML=num
        }
        if(el.target.matches("#tres")){
            console.log("3");
            key = 3;
            add()
            $display.innerHTML=num
        }
        if(el.target.matches("#cuatro")){
            console.log("4");
            key = 4;
            add()
            $display.innerHTML=num
        }
        if(el.target.matches("#cinco")){
            console.log("5");
            key = 5;
            add()
            $display.innerHTML=num
        }
        if(el.target.matches("#seis")){
            console.log("6");
            key = 6;
            add()
            $display.innerHTML=num
        }
        if(el.target.matches("#siete")){
            console.log("7");
            key = 7;
            add()
            $display.innerHTML=num
        }
        if(el.target.matches("#ocho")){
            console.log("8");
            key = 8;
            add()
            $display.innerHTML=num
        }
        if(el.target.matches("#nueve")){
            console.log("9");
            key = 9;
            add()
            $display.innerHTML=num
        }
        if(el.target.matches("#cero")){
            console.log("0");
            key = 0;
            add()
            $display.innerHTML=num
        }

        //*********************************/

        if(el.target.matches("#division")){
           console.log(num)
           int1 = num;
           console.log(int1)

        }


    })
})

/* console.log(num)
$display.innerHTML=num */