// ************* Array Map Kullanımı *************

const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"];

//userName icindeki orijinal isim kalsın
//shortName icindeki ilk harf buyuk (A.)
//newName icindeki ilk harf buyuk olsun
//{userName: "AYSE", shortName: "A.", newName: "Ayse"}

const NEW_USERS = USERS.map((user) => user.toLowerCase());
console.log(NEW_USERS);

/* const USERS_OBJ = USERS.map((item) => {
  return {
    userName: item,
    shortName: `${item[0]}.`,
    newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`,
  };
}); */

const USERS_OBJ = USERS.map((item) => ({
  userName: item,
  shortName: `${item[0]}.`,
  newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`,
}));

console.log(USERS_OBJ);

// <<<<<<<< Ne Yapıldı? >>>>>>>>
/*
Bu kod, JavaScript'te map fonksiyonunun nasıl kullanıldığını gösteren bir örnektir. Şimdi adım adım inceleyelim:

1. Başlangıç Dizisi (USERS)
Kodun başında, büyük ve küçük harflerin karışık olduğu bir kullanıcı listesi (USERS dizisi) tanımlanıyor:

js
Kopyala
Düzenle
const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"];
Bu dizi, içinde farklı formatlarda isimler barındırıyor.

2. map ile Küçük Harfe Çevirme
İlk map işlemi, tüm kullanıcı adlarını küçük harfe çeviriyor:

js
Kopyala
Düzenle
const NEW_USERS = USERS.map((user) => user.toLowerCase());
console.log(NEW_USERS);
Bu işlem sonrası NEW_USERS şu şekilde olacak:

js
Kopyala
Düzenle
["ayse", "mehmet", "tugce", "aksel"]
Burada map, her bir elemanı döngüye sokarak toLowerCase() metoduyla hepsini küçük harfe çeviriyor.

3. Kullanıcı Nesnesi (USERS_OBJ) Oluşturma
Asıl önemli kısım burası. map fonksiyonu kullanılarak her bir kullanıcı için belirli özellikleri olan nesneler oluşturuluyor:

js
Kopyala
Düzenle
const USERS_OBJ = USERS.map((item) => ({
  userName: item,  // Orijinal haliyle kullanıcı adı
  shortName: `${item[0]}.`,  // İlk harfi büyük harfle alıp yanına nokta ekleme (A.)
  newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`, // İlk harf büyük, geri kalanı küçük
}));
Bu kod bloğu her bir öğe için bir nesne (object) oluşturuyor:

Orijinal userName	shortName (İlk harf ve nokta)	newName (İlk harf büyük, geri kalanı küçük)
"AYSE"	"A."	"Ayse"
"MehMet"	"M."	"Mehmet"
"TugCE"	"T."	"Tugce"
"AkSEL"	"A."	"Aksel"
Bu işlemler şu şekilde çalışıyor:

userName: item → Kullanıcının orijinal ismini olduğu gibi korur.
shortName: \${item[0]}.`` → İsmin ilk harfini alıp yanına nokta ekler.
newName: \${item[0].toUpperCase()}${item.slice(1).toLowerCase()}``
item[0].toUpperCase() → İlk harfi büyük yapar.
item.slice(1).toLowerCase() → Geri kalan tüm harfleri küçük yapar.
4. Çıktı
Kodun sonunda console.log(USERS_OBJ); komutu çalıştırıldığında şu şekilde bir çıktı alınır:

js
Kopyala
Düzenle
[
  { userName: 'AYSE', shortName: 'A.', newName: 'Ayse' },
  { userName: 'MehMet', shortName: 'M.', newName: 'Mehmet' },
  { userName: 'TugCE', shortName: 'T.', newName: 'Tugce' },
  { userName: 'AkSEL', shortName: 'A.', newName: 'Aksel' }
]
Sonuç
Bu kod, map metodunu kullanarak bir dizideki her bir öğeyi dönüştürmeyi gösteren güzel bir örnektir. Kullanıcı isimleri belirli bir formatta yeniden düzenlenerek nesneler halinde saklanıyor.
*/