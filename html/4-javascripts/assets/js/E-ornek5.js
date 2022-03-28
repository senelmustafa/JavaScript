let isim=document.querySelector(".container");
let mlz1=document.querySelector(".bir");
let mlz2=document.querySelector(".iki");
let mlz3=document.querySelector(".uc");
let mlz4=document.querySelector(".dort");
let mlz5=document.querySelector(".bes");


mlz1.innerText ="1.UN";
mlz2.innerText="2.ŞEKER";
mlz3.innerText="3.BADEM";
mlz4.innerText="4.PORTAKAL";
mlz5.innerText="5.TEREYAĞI";

/* mlz5.innerHTML = `<ol style='list-style-position:inside;'>
<li>kiraz</li>
<li>elma</li>
<li>muz</li>
<li>cilek</li>
</ol>`;
 */

let baslik=
`<div class="malzemeler">
        <div class="bir">1.un</div>
        <div class="iki">2.yumurta</div>
        <div class="uc">3.şeker</div>
        <div class="dort">4.badem</div>
        <div class="bes">5.tereyağı</div>
      </div>`

     isim.innerHTML=`<H1 style="color:white">MALZEMELER</H1>`+baslik;

