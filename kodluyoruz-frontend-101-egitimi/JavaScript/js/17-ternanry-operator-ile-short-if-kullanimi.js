// ************* Ternanry Operator ile short-if Kullanımı *************

// Eğer kullanıcı adı varsa ekrana yazdır yoksa hata mesajı ver.

let userName = prompt("Kullanıcı Adınızı Giriniz: ");
let info = document.querySelector("#info");

// ternary kullanımı:
// koşul ? doğruysa : yanlışsa

info.innerHTML = `${userName.length > 0 ? userName: "Kullanıcı Bilginiz Bulunamadı"}`


// Örnek 1: Sonuç: undefined
let boolean;

const isBooleanTrue = boolean ? true : false;

console.log(isBooleanTrue)
>> false

console.log(boolean)


// Örnek 2: Sonuç: "Giriş yapabilirsiniz."
let age = 24;
let permission = (age >= 18) ? "Giriş yapabilirsiniz." : "Giriş yapamazsınız.";

console.log(permission);

// Örnek 3: Sonuç: "İki Şehir Aynı Değil"
//=== Hem değeri hem de türü eşitse
let firstCity = "Ankara";

let secondCity = "İstanbul";

const isEqual = (firstCity === secondCity) ? "İki şehir aynı" : "İki şehir aynı değil";

console.log(isEqual);

// Örnek 4: Sonuç: ""
var money;
var canBuy = 
    (money < 17) ? "Satın alamazsın..":
    (money > 30) ? "Satın alabilirsin..":
    "Para miktarını girmen gerekmektedir..";

console.log(canBuy) 