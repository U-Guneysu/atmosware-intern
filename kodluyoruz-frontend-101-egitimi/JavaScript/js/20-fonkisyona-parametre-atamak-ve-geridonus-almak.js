// ************* Fonksiyonlara Parametreler Atamak ve Fonksiyondan Geridönüş Almak *************

// Temel Kurallar:
// 1: Bir Fonksiyon Bir veya Birden Fazla Parametre Alabilir veye Hiç Almayabilir
// 2: Bir Fonksiyon Dışarı Bilgi Gönderebilir(return) veya Göndermeyelebilir
// 3: Mümkünse Fonksiyonun Bağımlılıklarını Azaltmak Gerekir

let firstName = "Lorem"

function greetings(firstName="", lastName="") {
    //console.log(`Merhaba ${firstName ? firstName : ""}`)
    console.log(`Merhaba ${firstName}`)
    console.log(`Merhaba ${firstName} ${lastName}`)
}// default parametre alıyor

console.log(firstName) //değişken
greetings() // fonksiyonu parametre göndermedik
greetings("Umut")

function greetings2(firstName, lastName) {
    let info = `Merhaba ${firstName} ${lastName}`
    return info
}

let greetingsInfo = greetings2("Ad", "Soyad")
console.log(info)

function domIdWriteInfo(id, info){
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

let htmlInfo = `<span style="color:red">Color Red</span>`

domIdWriteInfo("greeting", htmlInfo)
domIdWriteInfo("info", greetings2("Umut", "G."))