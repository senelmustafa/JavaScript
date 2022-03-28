/* console.log("merhaba");
console.warn("bu bir uyarıdır");
console.error("bu bir hata mesajıdır");
 */

/* örnek 2: */
/* var name=prompt("isminizi yazınız");
console.log("merhaba "+ name+ " nasılsın"); */

/* örnek 3 */
/* var kenar =prompt("karenin bir kenarını giriniz :");
var kareninAlani=kenar*kenar;
console.log("bu karenin alanı "+kareninAlani+ " dır. "); */

/* örnek4  */
/* var adı=prompt("Adınızı Yazınız:");
var sAdi=prompt("Soyadınızı Yazınız :");
var yas=prompt("Yaşınızı Giriniz :");
alert("isminiz : "+adı+"  Soyadınız :  "+ sAdi+ "  Yasınız :"+ yas+ "olarak tanımlamlanmıştır");
 */


/* örnek 5  */
/* var pi=3.14;
console.log(pi);
console.log(typeof pi); */

/* örnek 6  */
/* let fiyat;
console.log(fiyat); /*undifined*/
/* fiyat =5.5;
console.log(typeof fiyat);
 */

/* örnek 6  */
/* const kelime=null;
console.log(kelime);
console.log(typeof kelime);
 */


/* örnek 7  */
/* const kutu=6;
const koli=34;
const sise=76;
let toplamMalzeme=kutu +koli+sise;
console.log(toplamMalzeme); 
toplamMalzeme++;
console.log(toplamMalzeme); 
toplamMalzeme+=27;
console.log(toplamMalzeme); 
console.log("Toplam "+toplamMalzeme +"adet malzemevar"); 
console.log(`Toplam ${toplamMalzeme} adet malzemevar`); 
 */

/* örnek 8 */
/* const ad="Mustafa";
const soyad="ŞENEL";
console.log(ad+ soyad); */

/*
/* örnek 9*/
/* const yil=2022;
const dTarihi=1981;
const yasi=yil-dTarihi;
console.log("yaşi : " + yasi);
console.log("yaşi : " + Number(yil-dTarihi));/*yaşi : 41 */
/* console.log(`yas : ${yil} -${dTarihi}`);/*yas : 2022 -1981*/
/* console.log(`yas : ${yil -dTarihi}`) *//*yas : 41*/
 

/*ornek 10*/ 
/* var depo=0;
const sayi=123;
const birler=sayi%10;
depo+=birler;
console.log(birler);
const onlar=Math.floor(sayi/10)%10;
depo+=onlar;
console.log(onlar);
const yuzler=Math.floor(sayi/100)%10;
depo+=yuzler;
console.log(yuzler);
console.log(depo); */

/*ornek 11*/ 

/* const sayi1=5;
const sayi2=-7;
const isim="Mustafa";
console.log(Boolean(sayi1));
console.log(Boolean(sayi2));
console.log(Boolean(isim));
const sifir=0;
const hic=null;
const bos="";
const tanimsiz=undefined;
const sayiDedil=NaN;
console.log(Boolean(sifir),Boolean(hic));
console.log(Boolean(tanimsiz),Boolean(bos));
console.log(Boolean(sayiDedil)); */

/*Örnek 12 */
/* const sayi="1000";
console.log(sayi+15);
console.log(Number(sayi)+15); */


/*Örnek 13 */
const sayi=13;
console.log(sayi+sayi);
console.log(String(sayi)+sayi);