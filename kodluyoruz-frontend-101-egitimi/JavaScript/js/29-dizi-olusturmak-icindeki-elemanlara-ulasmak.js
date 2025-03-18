// ************* Array - Dizilerle Çalışmak *************

// ************* Array Oluşturmak *************
let domain = "kodluyoruz"
let isActive = false
let items = [1, 2, 3, isActive, domain]
console.log(items)

let emptyArray = [] //Boş bir liste

// ************* Array içerisindeki eleman/öğe sayısını öğrenmek => items.length *************
console.log(
    items.length //array içerisindeki öğe sayısı
)
document.querySelector("#info").innerHTML = items.length

// ************* Array içindeki İLK elemanın çağırılması *************
console.log( items[0] ) //items dizisindeki ilk eleman "1" imiş

// ************* Array içindeki ORTADAKİ elemanın çağırılması *************
console.log(
    "Ortadaki Değer: ",
    items[ Math.floor(items.length / 2) ]
)
/*
items.length / 2

Dizinin uzunluğunu 2'ye böler.
Örneğin, items.length = 5 ise → 5 / 2 = 2.5 olur.
Math.floor(items.length / 2)

Math.floor() fonksiyonu, ondalıklı sayıyı aşağı yuvarlar.
Örneğin, 2.5 → 2 olur.
items[Math.floor(items.length / 2)]

Hesaplanan indeks ortadaki elemanı bulmak için kullanılır.
*/

// ************* Array içindeki SON elemanın çağırılması *************
console.log( items[items.length - 1] ) //items dizisindeki son eleman "kodluyoruz" imiş

// ************* Değişken içindeki bilginin Array olup olmadığının kontrol edilmesi *************
console.log(
    typeof(items) //object olarak çıktı veriyor
)

console.log(
    Array.isArray(items) //"true" çıktısı
)

// Hangileri isArray => True verir?

console.log("[] :", Array.isArray( [] ) ) // Sonuç => true || [] bir dizidir, bu yüzden Array.isArray([]) true döndürür.
console.log("1 :", Array.isArray( 1 ) ) // Sonuç => false || 1 bir sayı (number) olduğu için, Array.isArray(1) false döndürür.
console.log("true :", Array.isArray( true ) ) // Sonuç => false ||  true bir boolean değerdir, bu yüzden Array.isArray(true) false döndürür.

/*
let items = ["elma", "armut", "muz"];
console.log(items.length);    // 3 (dizide 3 eleman var)
console.log(items.length - 1); // 2 (son elemanın indeksi)
console.log(items[items.length - 1]); // "muz" (son elemanı döndürür)
*/