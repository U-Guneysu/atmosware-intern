// ************* Çoklu Koşullarla Çalışmak *************

let userName = prompt("Kullanıcı Adınızı Giriniz: ");
let age = Number(prompt("Yaşınızı Giriniz: "));
let info = document.querySelector("#info");

if (userName && age >= 18) {
    info.innerHTML = "Ehliyet Alabilirsiniz."
} else if (!userName) {
    info.innerHTML = "Kullanıcı Adınız Mevcut Değil!"
} else if ( !(age >= 18) ) {
    info.innerHTML = "Ehliyet Almak İçin Yaşınız Uygun Değil!"
}