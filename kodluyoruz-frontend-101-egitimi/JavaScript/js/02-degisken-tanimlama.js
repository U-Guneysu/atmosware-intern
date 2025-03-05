// ***** let ve const ile Değişken Tanımlama *****

// var ile değişken tanımlama:

// ----------------- //
/* var serverName = "api.kodluyoruz.org"
console.log(serverName) */
// ----------------- //

// let ile değişken tanımlama:
// ----------------- //
/* let serverName;
console.log(serverName) */
// ----------------- //

// let ile değişkene bilgi atamak:
// ----------------- //
/* serverName = "https://kodluyoruz.org"
console.log(serverName) */
// ----------------- //

// let ile değişkene bilgi atayarak tanımlamak:
// ----------------- //
/* let password = "1234";
console.log(password) */
// ----------------- //

// değişken ataması yapmadan önce kullanmaya çalışmak:

// --HATALI KULLANIM-- //
/* console.log(fullName)
let fullName = "U.G" */
// ----------------- //

// --DOĞRU KULLANIM-- //
/* let fullName = "U.G" */
// ----------------- //

// let ile tanımlanan değişkenin içindeki bilgiyi değiştirmek:
// ----------------- //
/* fullName = "Lorem Ipsum"
console.log(fullName) */
// ----------------- //

//Birleştirme veya ekleme işlemi
// ----------------- //
/* console.log(fullName + " Test"); //Bu metin değişkene eklenmemiştir

fullName = fullName + " Yeni Eklenen Bilgi"  //Bu metin değişkene eklenmiştir
fullName = "Yeni Eklenen Bilgi " + fullName  

fullName = "Sıfırlandı"
fullName += " ve Yeni Bilgi Eklendi" 
console.log(fullName) */
// ----------------- //

// const ile değişkeni boş tanımlamaya çalışmak:
// ----------------- //
/* const serverPassword; */ 
//Değişken tanımlandı (Başarısız)
// ----------------- //

// const ile değişken tanımlamak: (const sabittir ve değiştirilemez)
// ----------------- //
/* const SERVER_PASSWORD = "asdasdasdasd"
console.log(serverPassword) */
// ----------------- //

//const SERVER_PASSWORD = "12345"
//console.log(serverPassword)