// ************* Object İçerisine Metod Nasıl Eklenir? *************
let products;

try {
  products.forEach((item) => console.log(item));
} catch (error) {
  console.log("Hata =>", error);
  products = [1, 2, 3]
  products.forEach((item) => console.log(item));
}

console.log("Hata Yönetimi Düzgün Çalışıyor");

let info = "kodluyoruz";
console.log(info);
