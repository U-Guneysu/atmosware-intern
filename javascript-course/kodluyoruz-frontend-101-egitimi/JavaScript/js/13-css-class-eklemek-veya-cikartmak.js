// ************* CSS Class Eklemek veya Çıkartmak *************

let greeting = document.querySelector("#greeting");

greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info", "second-class", "third-class")// Birden fazla class eklemek için virgül kullanılır.

greeting.classList.remove("title", "second-class", "third-class")// Birden fazla class çıkartmak için virgül kullanılır.

console.log(greeting.classList);