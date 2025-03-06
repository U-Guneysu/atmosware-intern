// https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

// let h2 = document.getElementsByTagName("h2")
let title = document.getElementById("title")
title.innerHTML = "Değişen Başlık";
console.log(title.innerHTML);

let link = document.querySelector("#kodluyoruzLink"); //ul#list>li>a 
link.innerHTML += " Değişti"; //Mevcut değeri korur ve sonuna ekler
link.style.color = "red";
link.classList.add("btn");
