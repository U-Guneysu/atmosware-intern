// ******** Veri Türünü Öğrenmek ve Veri Türü Dönüşümleri ********
// JavaScript'te veri türünü öğrenmek için typeof operatörü kullanılır.
// typeof operatörü, bir değerin veri türünü döndürür.
// typeof operatörü ile bir değerin veri türünü öğrenmek için:
// typeof değişkenAdı
// şeklinde kullanılır.
//
// Örnek:
let price = 111;
let stringPrice = "111";
let hasPassword = true;

console.log("price:", typeof price);

console.log("stringPrice:", typeof stringPrice);

console.log("hasPassword:", typeof hasPassword);

// JavaScript'te veri türlerini birbirine dönüştürmek için bazı fonksiyonlar bulunmaktadır.
// Bu fonksiyonlar, bir veri türünü başka bir veri türüne dönüştürmek için kullanılır.
// string(metinsel) bilgileri int ve float'a dönüştürmek
let number1 = "11";
console.log("number1 (Dönüştürülmemiş): ", number1, "\ntypeof: ", typeof number1); // string
number1 = parseInt(number1);
console.log("number1 (ParseInt): ", number1, "\ntypeof: ", typeof number1); // number

console.log("*************************************");

let number2 = "11px";
console.log("number2 (Dönüştürülmemiş): ", number2, "\ntypeof: ", typeof number2); // string
number2 = parseInt(number2);
console.log("number2 (ParseInt): ", number2, "\ntypeof: ", typeof number2); // number

console.log("*************************************");

let number3 = "11px";
console.log("number3 (Dönüştürülmemiş): ", number3, "\ntypeof: ", typeof number3); // string
number3 = Number(number3);
console.log("number3 (Number): ", number3, "\ntypeof: ", typeof number3); // number
console.log("number3 (ParseInt): ", number3, "\ntypeof: ", typeof number3); // number

console.log("*************************************");

let number4 = "11.4px";
console.log("number4 (Dönüştürülmemiş): ", number4, "\ntypeof: ", typeof number4); // string
number4 = parseFloat(number4);
console.log("number4 (ParseFloat): ", number4, "\ntypeof: ", typeof number4); // number

console.log("*************************************");

//Number Veri Tipinden String Veri Tipine Dönüştürme
console.log("Number Veri Tipinden String \nVeri Tipine Dönüştürme");
let number5 = 55;
console.log("number5 (toString): ", number5, "\ntypeof: ", typeof number5); // number
number5 = number5.toString();
console.log("number5 (toString): ", number5, "\ntypeof: ", typeof number5); // string
