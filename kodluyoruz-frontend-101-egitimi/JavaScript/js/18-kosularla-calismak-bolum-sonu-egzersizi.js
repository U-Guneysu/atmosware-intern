// ************* Koşullarla Çalışmak Bölüm Sonu Egzersizi *************

/*
1- prompt ile aldığın bilgiye göre aşağıdaki yapıyı kullanarak notun bilgisini #info'ya yazdır
AA - 90-100
BA - 85-89
BB - 80-84
CB - 75-79
CC - 70-74
DC - 65-69
DD - 60-64
FD - 50-59
FF - 0-49

2- Kullanıcının girdiği verinin istediğimiz aralıkta olup olmadığını kontrol et
3- FF bilgisinde üzgün surat ikonu çıkart, diğerlerinde ise gülücük olsun :)
4- FF class bilgisi text-danger, diğerlerinin ise text-primary olsun
*/

let grade = prompt("Notunuzu Giriniz: ");
let info = document.querySelector("#info");

if (isNaN(grade) || grade < 0 || grade > 100) {
  info.innerHTML = "Geçerli bir not giriniz!";
} else {
  let gradeMessage =
    grade >= 90
      ? "AA"
      : grade >= 85
      ? "BA"
      : grade >= 80
      ? "BB"
      : grade >= 75
      ? "CB"
      : grade >= 70
      ? "CC"
      : grade >= 65
      ? "DC"
      : grade >= 60
      ? "DD"
      : grade >= 50
      ? "FD"
      : "FF";
      let emoji = gradeMessage === "FF" ? `Puanın - ${grade} 😥` : `Puanın - ${grade} 😍`;   
      info.innerHTML = emoji
      info.className = grade < 50 ? "text-danger" : "text-primary";
}
