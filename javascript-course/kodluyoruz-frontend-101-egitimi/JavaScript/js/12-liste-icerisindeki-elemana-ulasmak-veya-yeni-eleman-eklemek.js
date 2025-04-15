// ************* Liste İçerisindeki Son Elemana Ulaşmak veya Eleman Eklemek *************

let lastChild = document.querySelector("ul#list>li:last-child"); //Repellendus?
lastChild.innerHTML = "Son Eleman Değiştirildi";//Repellendus? -> Son Eleman Değiştirildi
console.log(lastChild);

let firstChild = document.querySelector("ul#list>li:first-child"); //Lorem.
firstChild.innerHTML = "İlk Eleman Değiştirildi";//Repellendus? -> İlk Eleman Değiştirildi
console.log(firstChild);

let ulDOM = document.querySelector("ul#list"); //SEÇTİĞİMİZ UL
let liDOM = document.createElement("li") //YENİ ELEMAN OLUŞTURDUK
liDOM.innerHTML = "Yeni Eklenen 1. Eleman"; //YENİ OLUŞTURDUĞUMUZ ELEMANA İÇERİK EKLEDİK

//ulDOM.appendChild(liDOM); //Yeni oluşturduğumuz elemanı ulDOM'a ekledik. Son eleman olarak ekler.

ulDOM.prepend(liDOM); //Yeni oluşturduğumuz elemanı ulDOM'a ekledik. İlk eleman olarak ekler.
