// ************* Array yapısına öğe eklemek ve Array içerisinden istenilen öğenin çıkarılması *************

let items = [10, 20, 30, 40]
console.log("items - ilk hali", items)

// ************* Array: sona öğe/eleman eklemek -> push *************
items.push(50)
console.log("50 :", items)

// ************* Array: başa öğe eklemek --------> unshift *************

items.unshift(0) // items.unshift(value) JavaScript'te bir dizinin başına (en soluna) eleman eklemek
console.log("0 :", items)
/*
Dizinin başına eleman ekler.
Orijinal diziyi değiştirir.
Yeni dizinin uzunluğunu döndürür.
Alternatifi: push() (Dizinin sonuna eleman ekler). 
*/

// ************* Array: sondaki öğeyi çıkarmak --> pop *************

console.log("Dizinin İLK hali: ", items)
let lastItem = items.pop() //items.pop() JavaScript'te bir dizinin (array) son elemanını kaldırmak ve döndürmek için kullanılan bir metottur.
console.log("Bu dizinin son elemanı =>", lastItem, "\n" ,"Dizinin SON hali: " ,items) // "50" öğesi silindi
/*
Nasıl Çalışır?
Son elemanı diziden çıkarır.
Çıkarılan elemanı döndürür.
Eğer dizi boşsa undefined döner.
*/

// ************* Array: baştaki öğeyi çıkarmak --> shift *************
let firstItem = items.shift() //items.shift() JavaScript'te bir dizinin başındaki (ilk) elemanı kaldırmak ve döndürmek için kullanılan bir metottur.
console.log("Bu dizinin ilk elemanı =>", firstItem, "\n" ,"Dizinin SON hali: " ,items) // "0" öğesi silindi
/* 
Dizinin ilk elemanını kaldırır.
Kaldırılan elemanı döndürür.
Orijinal diziyi değiştirir.
Boş dizide undefined döner.
Alternatifi: pop() (Dizinin son elemanını kaldırır).
*/

// ************* Array içindeki bir öğenin bilgisinin değiştirilmesi *************

// İlK Öğenin Değiştirilmesi

items [0] = -10;
console.log(items)
/*
Bu Kod Ne Yapar?
Dizinin ilk elemanını (index 0) -10 olarak değiştirir.
Orijinal diziyi değiştirir.
console.log(items) ile güncellenmiş diziyi ekrana yazdırır.

//Eğer boş bir dizide items[0] kullanırsan, yeni bir eleman eklemiş olursun:
//Dizinin ilk elemanı yoksa, doğrudan eklenir.

>>> Özet <<<
Dizinin belirli bir indeksindeki elemanı değiştirmek için kullanılır.
Mevcut diziyi değiştirir.
Eğer belirtilen indeks boşsa, yeni eleman olarak eklenir.

*/

// Sonuncu öğenin değiştirilmesi
items[items.length - 1] = 65;
console.log(items)

/*
Bu Kod Ne Yapar?
Dizinin son elemanını 65 olarak değiştirir.
Orijinal diziyi değiştirir.
console.log(items) ile güncellenmiş diziyi ekrana yazdırır. 

Boş bir dizide bu kod çalışmaz, çünkü geçerli bir indeks yoktur.

>>> Özet <<<
Son elemanı günceller.
Mevcut diziyi değiştirir.
Boş dizide çalışmaz.
*/

items[10000] = 10000
console.log(items)
/*
items[10000] = 10000; dizinin 10.000’inci indeksine 10000 değerini koydu.
Arada kalan 9996 tane eleman undefined oldu (ancak console.log(items) çıktısında undefined yerine boş öğeler olarak görünür).
Dizinin uzunluğu 10001 oldu çünkü en büyük indeks 10000 olduğunda length = 10000 + 1 olur. 
*/
