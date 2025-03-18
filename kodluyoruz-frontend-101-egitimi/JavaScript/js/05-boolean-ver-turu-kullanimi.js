// ************* Boolean Veri Türü Kullanımı *************
// Boolean veri türü sadece iki değer alabilir: true ve false
// true: doğru anlamına gelir.
// false: yanlış anlamına gelir.
//
// 0 ve 1'i Anlamak => 0: Hayır, 1: Evet
let isActive = false; // 0
isActive = true; // 1
console.log(isActive); // true
//
// Boolean() Fonksiyonu
// Boolean() fonksiyonu, bir değeri boolean veri türüne dönüştürmek için kullanılır.
// UYARI!! => 0, -0, null, false, NaN, undefined, veya boş bir string ("" veya '') dışındaki tüm değerler true olarak kabul edilir.
let userName;
let isUserName = Boolean(userName);
console.log(isUserName); // burada "userName" değişkenine bir değer atanmadığı için otomatik olarak false sonucunu verecektir.
//
Boolean("11") // true
console.log(Boolean("11"))
Boolean(0) // false
console.log(Boolean(0))
Boolean(-0) // false
console.log(Boolean())
Boolean(null) // false
console.log(Boolean(null));
Boolean(false) // false
console.log(Boolean(false))
Boolean(NaN) // false
console.log(Boolean(NaN))
Boolean(undefined) // false
console.log(Boolean(undefined))
Boolean("") // false
console.log(Boolean(""))
Boolean(" ") // true (boşluk karakteri var)
console.log(Boolean(" "))
//gibi gibi...
Boolean(0 === 0) // true (0 eşittir 0 olduğu için true)
console.log(Boolean(0 === 0))
/*
    1. === (strict equality - katı eşitlik) operatörü, hem türü hem de değeri kontrol eder.
    2. 0 === 0 ifadesinde:
        Sol taraf: 0 (number)
        Sağ taraf: 0 (number)
    İki değer hem tür hem de içerik olarak aynı olduğu için true döner.
*/
Boolean(-0.1) // true 
console.log(Boolean(-0.1))
//
userName = "John-Doe";
console.log("User Name:", Boolean(userName))