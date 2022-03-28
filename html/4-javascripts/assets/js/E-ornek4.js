let renk=document.querySelector(".container");
let  renk1=document.querySelector(".red");
let renk2=document.querySelector(".white");
let renk3=document.querySelector(".blue");
let renk4=document.querySelector(".black");




renk1.innerText="K I R M I Z I";
renk2.innerText="B E Y A Z";
renk3.innerText="M A V İ";
renk4.innerText="S İ Y A H";

let yanlisHali=
        `<div class="kutu">
        <div class="red">SİYAH</div>
        <div class="white">KIRMIZI</div>
        <div class="blue">BEYAZ</div>
        <div class="black">MAVİ</div>
         </div>`
renk.innerHTML='<h1 style="color:red;">RENKLER</h1> <hr>'+yanlisHali;



