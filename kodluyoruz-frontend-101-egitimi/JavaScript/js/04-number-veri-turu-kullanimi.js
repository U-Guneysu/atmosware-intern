// ************* Number Veri Türü Kullanımı *************
// Number veri türü, sayıları temsil eder.
// JavaScript'te sayılar iki türde olabilir:
// 1. Tam sayılar (Örn: 3, 300, 1000)
// 2. Ondalıklı sayılar (Örn: 3.14, 1.5, 100.0)
// JavaScript'te sayılar aritmetik işlemlerde kullanılır.
// Number veri türü ile ilgili örnekler:
console.log("Number Veri Türü Kullanımı")
// ----------------- //
let number1 = 100;
console.log(number1)
let number2 = 3.14;
console.log(number2)
let number3 = 1000;
console.log(number3)
let number4 = 1.5;
console.log(number4)
//
// console.log(number1); //100
// console.log(number2); //3.14
// console.log(number3); //1000
// console.log(number4); //1.5
// ----------------- //
//
console.log("Aritmetik İşlemler'in Sonuçları:")
// ----------------- //
// Yukarıdaki oluşturulmuş değerleri kullanarak aritmetik işlemler yapalım.
let sum = number1 + number2;
console.log(`${number1} ile ${number2} TOPLAMA İŞLEMİ SONUCU: ${sum}`); // Sonuç: 103.14 olarak Google DevTools belirtilmeli. => "sum" değişkeni "number1" ve "number2" değişkenlerinin toplamını tutar.
//
let subtraction = number3 - number4;
console.log(`${number3} ile ${number4} ÇIKARMA İŞLEMİ SONUCU: ${subtraction}`)//Sonuç: 998.5 olarak Google DevTools belirtilmeli => "subtraction" değişkeni "number3" ve "number4" değişkenlerinin farkını tutar.
//
let multiplication = number1 * number2; 
console.log(`${number1} ile ${number2} ÇARPMA İŞLEMİ SONUCU:" ${multiplication}`)//Sonuç: 314 olarak Google DevTools belirtilmeli => "multiplication" değişkeni "number1" ve "number2" değişkenlerinin çarpımını tutar.
//
let division = number3 / number4;
console.log(`${number3} ile ${number4} BÖLME İŞLEMİ SONUCU: ${division}`)//Sonuç: 666.6666666666666 olarak Google DevTools belirtilmeli => "division" değişkeni "number3" ve "number4" değişkenlerinin bölümünü tutar.
//
//Sonuçları "console.log()" fonksiyonu ile ekrana yazdıralım.
// ----------------- //
// #İşlem Öncelik Sırası:
// 1. Parantez içi işlemler
// 2. Çarpma ve Bölme
// 3. Toplama ve Çıkarma
//
let result = (number1 + number2) * number3 / number4; 
//Sonuç: 68.760 olarak Google DevTools belirtilmeli 
// => "result" değişkeni "number1" ve "number2" değişkenlerinin toplamını alır, "number3" ile çarpar ve "number4" ile bölerek sonucu tutar.
console.log("İşlem Öncelik Sırası Sonucu: " + result)
// ----------------- //
//
//
// #Üs Alma İşlemi (**):
let exponentiation = number1 ** 2; // number1'in 2. kuvvetini alır.
console.log(number1 + " sayısının 2. kuvveti: " + exponentiation)//Sonuç: 10000 olarak Google DevTools belirtilmeli
// ----------------- //
// #Mod Alma İşlemi (%):
// Bölme işlemi yapıldığında kalanı almak için mod (%) operatörü kullanılır.
// Örneğin: 10 % 3 işlemi yapıldığında sonuç 1 olur.
// Kalan 1 ise sayı tek, kalan 0 ise sayı çifttir.
// Eğer sayı % 2 == 0 ise çifttir.
// Eğer sayı % 2 == 1 ise tektir.
let mod = number3 % 3; // number3 sayısının 3'e bölümünden kalanı alır.
console.log(number3 + " sayısının 3'e bölümünden kalan: " + mod)//Sonuç: 1 olarak Google DevTools belirtilmeli
// ----------------- //
//
// #Artırma ve Azaltma İşlemleri:
let counter = 320
// ---Yöntem 1 Arttırma--- //
/* counter = counter + 1; */ // counter değişkenin değerini 1 arttırır.
// ---Yöntem 2 Arttırma--- //
/* counter += 1; */ // counter değişkenin değerini 1 arttırır.
// ---Yöntem 3 Arttırma--- //
/* counter++;  */// counter değişkenin değerini 1 arttırır.
console.log("Artırma İşlemi: " + counter) //Sonuç: 321 olarak Google DevTools belirtilmeli
// ---Yöntem 1 Azaltma--- //
/* counter = counter - 1; */ // counter değişkenin değerini 1 azaltır.
// ---Yöntem 2 Azaltma--- //
/* counter -= 1; */ // counter değişkenin değerini 1 azaltır.
// ---Yöntem 3 Azaltma--- //
/* counter--; */ // counter değişkenin değerini 1 azaltır.
console.log("Azaltma İşlemi: " + counter) //Sonuç: 320 olarak Google DevTools belirtilmeli
// ----------------- //
//
// #Aşağı Yuvarlama (Math.floor()):
let floor = Math.floor(3.9); // 3.9 sayısını aşağı yuvarlar.
console.log("Aşağı Yuvarlama: " + floor) //Sonuç: 3 olarak Google DevTools belirtilmeli
// #Yukarı Yuvarlama (Math.ceil()):
let ceil = Math.ceil(3.1); // 3.1 sayısını yukarı yuvarlar.
console.log("Yukarı Yuvarlama: " + ceil) //Sonuç: 4 olarak Google DevTools belirtilmeli
// #Yakına Yuvarlama (Math.round()):
let round = Math.round(3.5); // 3.5 sayısını en yakın sayıya yuvarlar.
console.log("Yakına Yuvarlama: " + round) //Sonuç: 4 olarak Google DevTools belirtilmeli
// ----------------- //
//
// #Random Sayı Üretme (Math.random()):
let random = Math.random(); // 0 ile 1 arasında rastgele bir sayı üretir.
console.log("Rastgele Sayı: " + random) //Sonuç: 0 ile 1 arasında rastgele bir sayı olarak Google DevTools belirtilmeli
// ----------------- //
//
// #Max ve Min Değer Bulma (Math.max() ve Math.min()):
let max = Math.max(1, 2, 3, 4, 5); // 1, 2, 3, 4 ve 5 sayıları arasından en büyüğü bulur.
console.log("Max Değer: " + max) //Sonuç: 5 olarak Google DevTools belirtilmeli
let min = Math.min(1, 2, 3, 4, 5); // 1, 2, 3, 4 ve 5 sayıları arasından en küçüğü bulur.
console.log("Min Değer: " + min) //Sonuç: 1 olarak Google DevTools belirtilmeli
// ----------------- //
//
// #Karekök Alma (Math.sqrt()):
let sqrt = Math.sqrt(16); // 16 sayısının karekökünü alır.
console.log("Karekök: " + sqrt) //Sonuç: 4 olarak Google DevTools belirtilmeli
// ----------------- //
//
// #Mutlak Değer Alma (Math.abs()):
let abs = Math.abs(-4); // -4 sayısının mutlak değerini alır.
console.log("Mutlak Değer: " + abs) //Sonuç: 4 olarak Google DevTools belirtilmeli
// ----------------- //
//
// #Pi Sayısı (Math.PI):
let pi = Math.PI; // Pi sayısını verir.
console.log("Pi Sayısı: " + pi) //Sonuç: 3.141592653589793 olarak Google DevTools belirtilmeli
// ----------------- //
//
// #Logaritma Alma (Math.log()):
let log = Math.log(2); // 2 sayısının logaritmasını alır.
console.log("Logaritma: " + log) //Sonuç: 0.6931471805599453 olarak Google DevTools belirtilmeli
// ----------------- //
//
// #Üs Alma (Math.pow()):
let pow = Math.pow(2, 3); // 2'nin 3. kuvvetini alır.
console.log("Üs Alma: " + pow) //Sonuç: 8 olarak Google DevTools belirtilmeli
// ----------------- //
//
// #Trigonometrik Fonksiyonlar:
// #Sinüs Alma (Math.sin()):
let sin = Math.sin(90); // 90 derecenin sinüsünü alır.
console.log("Sinüs Alma: " + sin) //Sonuç: 0.8939966636005579 olarak Google DevTools belirtilmeli
// ----------------- //
//
// #Kosinüs Alma (Math.cos()):
let cos = Math.cos(0); // 0 derecenin kosinüsünü alır.
console.log("Kosinüs Alma: " + cos) //Sonuç: 1 olarak Google DevTools belirtilmeli
// ----------------- //
//
// #Tanjant Alma (Math.tan()):
let tan = Math.tan(45); // 45 derecenin tanjantını alır.
console.log("Tanjant Alma: " + tan) //Sonuç: 1.6197751905438615 olarak Google DevTools belirtilmeli
// ----------------- //
//
// #Arcsinüs Alma (Math.asin()):
let asin = Math.asin(1); // 1 sayısının arcsinüsünü alır.
console.log("Arcsinüs Alma: " + asin) //Sonuç: 1.5707963267948966 olarak Google DevTools belirtilmeli
// ----------------- //
//
// #Arccos Alma (Math.acos()):
let acos = Math.acos(1); // 1 sayısının arccosünü alır.
console.log("Arccos Alma: " + acos) //Sonuç: 0 olarak Google DevTools belirtilmeli
// ----------------- //
//
// #Arctan Alma (Math.atan()):
let atan = Math.atan(1); // 1 sayısının arctanını alır.
console.log("Arctan Alma: " + atan) //Sonuç: 0.7853981633974483 olarak Google DevTools belirtilmeli
// ----------------- //
//
// #Arctan Alma (Math.atan2()):
let atan2 = Math.atan2(1, 1); // 1 ve 1 sayılarının arctanını alır.
console.log("Arctan Alma: " + atan2) //Sonuç: 0.7853981633974483 olarak Google DevTools belirtilmeli
// ----------------- //
//
// #Hiperbolik Fonksiyonlar:
// #Hiperbolik Sinüs Alma (Math.sinh()):
let sinh = Math.sinh(1); // 1 sayısının hiperbolik sinüsünü alır.
console.log("Hiperbolik Sinüs Alma: " + sinh) //Sonuç: 1.1752011936438014 olarak Google DevTools belirtilmeli
// ----------------- //
//
// #Hiperbolik Kosinüs Alma (Math.cosh()):
let cosh = Math.cosh(1); // 1 sayısının hiperbolik kosinüsünü alır.
console.log("Hiperbolik Kosinüs Alma: " + cosh) //Sonuç: 1.5430806348152437 olarak Google DevTools belirtilmeli
// ----------------- //
//
// #Hiperbolik Tanjant Alma (Math.tanh()):
let tanh = Math.tanh(1); // 1 sayısının hiperbolik tanjantını alır.
console.log("Hiperbolik Tanjant Alma: " + tanh) //Sonuç: 0.7615941559557649 olarak Google DevTools belirtilmeli
// ----------------- //
//
// #Hiperbolik Arctan Alma (Math.atanh()):
let atanh = Math.atanh(0.5); // 0.5 sayısının hiperbolik arctanını alır.
console.log("Hiperbolik Arctan Alma: " + atanh) //Sonuç: 0.5493061443340549 olarak Google DevTools belirtilmeli
// ----------------- //
//
// #Hiperbolik Arccos Alma (Math.acosh()):
let acosh = Math.acosh(2); // 2 sayısının hiperbolik arccosünü alır.
console.log("Hiperbolik Arccos Alma: " + acosh) //Sonuç: 1.3169578969248166 olarak Google DevTools belirtilmeli
// ----------------- //
//
// #Hiperbolik Arcsin Alma (Math.asinh()):
let asinh = Math.asinh(1); // 1 sayısının hiperbolik arcsinünü alır.
console.log("Hiperbolik Arcsin Alma: " + asinh) //Sonuç: 0.881373587019543 olarak Google DevTools belirtilmeli
// ----------------- //
//
// #String olarak yazılmış sayıları Number veri türüne çevirme:
let stringNumber = "100";
console.log("String Sayı: " + stringNumber) //Sonuç: 100 olarak Google DevTools belirtilmeli
console.log("String Sayı (Number): " + Number(stringNumber)) //Sonuç: 100 olarak Google DevTools belirtilmeli
// ----------------- //
//
// #Number veri türünü String veri türüne çevirme:
let numberString = 100;
console.log("Number Sayı: " + numberString) //Sonuç: 100 olarak Google DevTools belirtilmeli
console.log("Number Sayı (String): " + String(numberString)) //Sonuç: 100 olarak Google DevTools belirtilmeli
// ----------------- //
//
