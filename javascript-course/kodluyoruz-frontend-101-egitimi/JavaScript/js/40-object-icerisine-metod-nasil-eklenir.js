// ************* Object İçerisine Metod Nasıl Eklenir? *************

let user1 = {
  firstName: "Bilgin",
  lastName: "Uzman",
  score: [1, 2, 3, 4],
  isActive: true,
  shortName: function() {return `${this.firstName[0].toUpperCase()}. ${this.lastName}`}
};

console.log(user1)

/*
user1.shortName
ƒ () {return `${this.firstName[0].toUpperCase()}. ${this.lastName}`} 

user1.shortName()
'B. Uzman'
*/


// << TEST >>
var birey = {
    isim: 'Ali',
    soyisim: 'Veli',
    dogumYili: 1989,
    merhabaDe: (age) => `Merhaba, ben ${birey.isim} ${birey.soyisim}, ${age} yaşındayım`,
};
birey.yasHesapla = function () {
    return 2021 - this.dogumYili;
};
console.log(birey.merhabaDe(birey.yasHesapla()));

// Output:
// Merhaba, ben Ali Veli, 32 yaşındayım


/*
/// ************* Object ve Array Destructuring Nasıl Kullanılır? *************

//Object Destructuring

let settings = {
    userName: "loremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "kodluyoruz.org"
  };
  
  // Obje içindeki bilgilerin tek seferde çıkarılması
let userName = settings.userName
  console.log(userName)
  let {userName, password, isActive, ip, serverName} = settings
  console.log(userName, password, isActive, ip, serverName)
  console.log(settings)
  console.log(userName)
  // Obje içindeki bazı bilgilerin çıkarılması
  // Objenin destructuring ile kopyalanması
*/