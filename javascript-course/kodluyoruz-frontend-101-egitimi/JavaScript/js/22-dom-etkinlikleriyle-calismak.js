// ************* DOM Etkinlikleriyle Çalışmak *************

/* let greeting = document.querySelector("#greeting");
greeting.addEventListener("click", domClick); */

let greeting = document.querySelector("#greeting");
greeting.addEventListener("mouseover", domClick);

/* function domClick() {
    console.log("Tıklandı")
    console.log(this.innerHTML = "Tıklandığı Zaman Bilgi Değişti")
} */

/* function domClick() {
  console.log("Tıklandı");
  this.style.color = "red"
}
 */

function domClick() {
    console.log("Tetiklendi");
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}
  