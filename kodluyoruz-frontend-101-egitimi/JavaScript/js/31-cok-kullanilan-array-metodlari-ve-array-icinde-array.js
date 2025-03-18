// ************* Çok Kullanılan Array(Dizi) Metodları ve Array İçinde Array *************

function araBosluk(){
    console.log("---------------------")
}

let items = [1, 2, 3, 4, 5]

// *************  Array İçinde Array *************
let femaleUsers = ["Ayşe", "Hülya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers) 

// items.unshift() JavaScript'te bir dizinin başına bir veya daha fazla eleman eklemek için kullanılan bir metottur. 
// Bu metod, dizinin başına eleman ekler ve dizinin uzunluğunu döndürür.
/*
>>> Özet <<<
Dizinin başına eleman ekler.
Dizinin yeni uzunluğunu döndürür.
Birden fazla eleman eklenebilir.
Diziyi değiştirir, orijinal diziyi etkiler.
Alternatifi: push() (Dizinin sonuna eleman ekler).
*/

items.push(maleUsers)
console.log(items)

console.log(items.length) // Dizinin uzunluğunu yazdırır
console.log(items[0].length) // İlk Öğe (items[0]) bir dizi ise, o dizinin uzunluğunu yazdırır
console.log(items[0][0]) // İlk öğenin (items[0]) içindeki ilk elemanı yazdırır

// *************  Array İçerisinden Öğe Ayırmak -> splice(pos, item?) *************
let newItems = items.splice(1, 5)

console.log("newItems :", newItems)
console.log("items :", items)

araBosluk()

// *************  Array İçerisindeki Öğenin Index Bilgisini Bulmak -> indexOf('value') *************
items.unshift("lorem")
items.push("ipsum")

console.log( items.indexOf("ipsum") )

// *************  Array Kopyalamak -> slice, [...ES6] *************
let copyItems = items
console.log(items)

copyItems.pop()// Son öğe çıkartıldı
console.log("copyItems", copyItems)
console.log("items", items)

araBosluk()

console.log("Kopyaladıktan Sonraki Hali:")
copyItems = items.slice()// Kopyalama yaptı
copyItems.pop()// Son öğe çıkartıldı
console.log("copyItems", copyItems)
console.log("items", items)

araBosluk()

// *************  İki Array Bilgisini Birleştirmek -> [...ES6, ...ES6] *************

let es6Items = [...items] //es6 ve sonrasında gelen kopyalama işlemi
console.log(es6Items)

let allUsers = [...femaleUsers, ...maleUsers]// es6 birden fazla array yapısını birleştirmek
console.log(allUsers)

araBosluk()

// *************  Array İçerisindeki bilgiyi String'e çevirmek -> toString, join *************
console.log(allUsers.toString())
console.log(allUsers.join(" --- "))
 
// *************  İstediğimiz Index Bilgisine Öğe Eklemek -> splice(index, 0, value) *************
allUsers.splice(allUsers.length -1, 0, "Melisa")
allUsers.splice(Math.floor( allUsers.length / 2 ), 0, "Lorem")
console.log(allUsers)


//https://medium.com/@onurmorcagok/ecmascript-es6-nedir-es6-ile-gelen-yenilikler-69bd3b67d4c4