// ************* String Veri Türü İşlemleri *************
let email = "johndoe@gmail.com";
let firstName = "John";
let lastName = "Doe";

// String Veri Karakter Sayısı => length
console.log("Email Karakter Sayısı:", email.length);
console.log("First Name Karakter Sayısı:", firstName.length);
console.log("Last Name Karakter Sayısı:", lastName.length);

// Karakter Bulmak => charAt()
console.log("Last Name 1. Karakter:", lastName[0]);
console.log("Last Name 2. Karakteri:", lastName.charAt(1));
console.log("Last Name 3. Karakteri:", lastName.charAt(2));

// Küçük Harfe Çevirme => toLowerCase() & Büyük Harfe Çevirme => toUpperCase()
firstName = firstName.toUpperCase();
console.log("First Name Büyük Harf:", firstName);

lastName = lastName.toLowerCase();
console.log("Last Name Küçük Harf:", lastName);

//String İçinde İstediğimiz Bilgiyi Aramak ve Yerini Bulmak => search()
console.log(email.search("@")); // 7
console.log(email[7]); // @

console.log(email.search("var-olmayan-bir-deger")); // -1

//Belirli Bir Yere Kadar Olan Karakterleri Alma => slice() 
//HEDEF: Domain kısmını almak
let FIRST_DOMAIN = email.slice(email.search("@"));
console.log("Domain:", FIRST_DOMAIN);

let SECOND_DOMAIN = email.slice(email.search("@") + 1);
console.log("Domain:", SECOND_DOMAIN);

console.log(SECOND_DOMAIN.slice(0, 5)); // gmail (0, 1, 2, 3, 4) => 5 karakter (Beşinci indeks dahil değil)
                                               // g  m  a  i  l 
console.log(FIRST_DOMAIN.slice(0, FIRST_DOMAIN.indexOf("."))); // @gmail.com => @gmail                                
                                    
// Mevcut Bilgiyi Değiştirme => replace()
newEmail = email.replace("gmail.com", "kodluyoruz.org")
console.log("Yeni E-Posta:", newEmail);

// İstediğim Bilgi Var mı? => includes()
let isKodluyoruzIncluded = newEmail.includes("kodluyoruz")
console.log("Kodluyoruz Bilgisi:", isKodluyoruzIncluded);

let none= newEmail.includes("none")
console.log("None Bilgisi:", none); // false (Belirtilen değişkende "none" bilgisi yok)

// İstediğim Bilgiyle Başladı mı? Bitti mi? => startsWith() & endsWith()
isEmailEndWithOrg = newEmail.endsWith("@kodluyoruz.org")
console.log("E-Posta .org ile mi bitiyor?", isEmailEndWithOrg); // true

isEmailStartWithJohn = newEmail.startsWith("john")
console.log("E-Posta john ile mi başlıyor?", isEmailStartWithJohn); // true

isEmailEndWithCom= newEmail.startsWith("@gmail.com")
console.log("E-Posta .com ile mi bitiyor?", isEmailEndWithCom); // false

isEmailStartWithKod = newEmail.startsWith("kod")
console.log("E-Posta kod ile mi başlıyor?", isEmailStartWithKod); // false

// İlk Harfleri Büyük Yapma => toLocaleUpperCase()
firstName = "FirstName";
lastName = "LastName";
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLocaleLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLocaleLowerCase()}`;
console.log("Full Name:", fullName);