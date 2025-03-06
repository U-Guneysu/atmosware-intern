// ************* Karşılaştırme ve Mantıksal Operatörler *************

let price = "100";
let user = "user";

// == Eşitse

console.log("==: ", price == 100); // true (Price değeri 100'e eşit mi?)
console.log("==: ", price == 120); // false

// === Hem değeri hem de türü eşitse

console.log("===: ", price === 1); // false
console.log("===: ", price === 100); // false (Price değeri 100'e eşit mi ve metinsel bir değer mi?)

// != Eşit değilse

console.log(user != "guest") // true ("user" değeri "guest" değerine eşit değil mi?)

// < Küçükse

console.log("price < 100", price < 100); // false (Price değeri 1000'den küçük mü?)

// <= Küçük veya eşitse

console.log("price <= 100", price <= 100) // true (Price değeri 100'den küçük veya 100'e eşit mi?)

// > Büyükse

console.log("price > 100", price > 100) // false (Price değeri 100'den büyük mü?)

// >= Büyük veya eşitse

console.log("price >= 100", price >= 100) // true (Price değeri 100'den büyük değil fakat 100'e eşit) 


// && Ve

price = 0;
console.log(price > 0 && user != "guest") // false (Price değeri 0'dan büyük ve user değeri "guest" değil mi?)

// || Veya

console.log(price > 0 || user != "guest") // true (Price değeri 0'dan büyük veya user değeri "guest" değil mi?)

// ! Değilse (Tersi)
user = "guest";
price = 70;
console.log(!(price > 0 && user == "guest")) // false


// Örnekler
console.log(!!2);
//##1. İlk "!" Operatörü
//!2 → 2 sayısı truthy (doğru kabul edilen) bir değerdir.
//! operatörü boolean tersleme yapar, yani 2 değerini false yapar.
//##2. İkinci "!" Operatörü
//!!2 → Önceki false değeri tekrar ! ile terslenir.
//!!2 sonucu tekrar true olur.
//Sonuç: true