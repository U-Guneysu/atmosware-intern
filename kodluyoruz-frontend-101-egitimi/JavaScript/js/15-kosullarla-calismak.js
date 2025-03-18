// ************* Koşullarla Çalışmak *************

let userName = prompt("Kullanıcı Adınızı Giriniz: ");
// eğer kullanıcı bilgisi varsa ekrana yazdır
// eğer (userName.length > 0) ise {console.log(username)} değilse {console.log("Kullanıcı bilgisi yok.")}
// if (userName.length > 0) {console.log(username)} else {console.log("Kullanıcı bilgisi yok.")}

if (userName) { // "if" bölümü her zaman true ise çalışır
    console.log(`Kullanıcı Adınız: ${userName}`);
}
else{
    console.log("Kullanıcı bilgisi yok.");
}