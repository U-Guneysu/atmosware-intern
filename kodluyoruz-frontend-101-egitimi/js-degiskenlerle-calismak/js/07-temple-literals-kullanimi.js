// *********** Template Literals Kullanımı ***********

let userName = "John";
const DOMAIN = "kodluyoruz.org";

let email = userName + "@" + DOMAIN;
console.log("Merhaba!", userName, "\nMail Adresin:", email);

// Template Literals Kullanımı
// Template literals, string ifadeleri daha rahat bir şekilde oluşturmak için kullanılır.
// Template literals, backtick (`) karakteri ile oluşturulur.
// Template literals içerisinde ${} işareti ile değişkenler yazılabilir.
// Template literals içerisinde normal string ifadeleri de yazılabilir.
// Template literals içerisinde normal string ifadeleri yazarken tek tırnak ve çift tırnak kullanılabilir.
// Template literals içerisinde satır atlama yapılabilir.
// Template literals içerisinde normal string ifadeleri yazarken satır atlama yapamazsınız.
// Template literals içerisinde satır atlama yapmak için \n karakterini kullanabilirsiniz.
// Template literals içerisinde normal string ifadeleri yazarken \n karakterini kullanarak satır atlama yapabilirsiniz.

console.log("********************");

let info = `
Merhaba! ${userName} 
\nMail Adresin: ${email} 
\nMevcut Borcun: ${(100 * 2) + 500}  TL
\nSaat: ${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}
\nKısa İsminiz: ${userName[0]}.
`;
console.log(info);

// Alıştırma: Aşağıdaki kod satırlarını Template Strings yazımına göre düzenleyiniz.
/* const kitap = {
    ad: "Fırtına",
    yazar: "Shakespeare",
    tarih: 1610
  } 
  const bookTable =
        "<table border>"+
    "<tbody>"+
      "<tr>"+
        "<td>"+"Kitap"+"</td>"+
        "<td>"+kitap.ad+"</td>"+
      "</tr>"+
    "<tr>"+
        "<td>"+"Yazar"+"</td>"+
        "<td>"+kitap.yazar+"</td>"+
      "</tr>"+
        "<tr>"+
        "<td>"+"Tarih"+"</td>"+
        "<td>"+kitap.tarih+"</td>"+
      "</tr>"+
   " </tbody>"+
  "</table>"
  document.body.innerHTML = bookTable*/

  // Çözüm:
    const kitap = {
    ad: "Fırtına",
    yazar: "Shakespeare",
    tarih: 1610
  }
    const bookTableSolve = `
    <table border>
    <tbody>
      <tr>
        <td>Kitap</td>
        <td>${kitap.ad}</td>
      </tr>
    <tr>
        <td>Yazar</td>
        <td>${kitap.yazar}</td>
        </tr>
        <tr>
        <td>Tarih</td>
        <td>${kitap.tarih}</td>
        </tr>
    </tbody>
    </table>
    `;
    document.body.innerHTML = bookTableSolve;

