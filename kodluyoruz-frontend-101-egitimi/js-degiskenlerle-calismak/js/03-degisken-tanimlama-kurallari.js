// ************* Değişken Tanımlama Kuralları *************
// 1# camelCase Kullanımı:
//camelCase değişkenin okunabilirliğini sağlamak için kullanılır. İlk kelimenin ilk harfi küçük, ikinci kelimenin ilk harfi büyük olacak şekilde yazılır.
let fullName = "İsim Soyisim";
let kodluyoruzServerInfo = "https://kodluyoruz.org"; 

// 2# UPPER_CASE Kullanımı:
// Büyük harfle tanımlanan değişkenler genellikle sabit değişkenler olur.
const password = "1234"; //Yanlış çünkü sabit değişken olduğu için büyük harfle yazılmalıdır. Çözümü aşağıda verilmiştir.
const PASSWORD = "1234"; //Doğru
const SERVER_PASSWORD = "1234"; //Doğru | Eğer birden fazla kelimeden oluşuyorsa “_” ile bu kelimeleri ayırmak mümkündür.

// 3# Değişkenlerde Türkçe ve diğer karakterlerin kullanımı:
let türkçebilgi = "Türkçe Bilgi"; //Yanlış çünkü türkçe karakter kullanılmış ve camelCase kullanılmamış. Çözümü aşağıda verilmiştir.
let info = "Türkçe Bilgi"; //Doğru

// 4# (UYARI) Anlamsız Değişken İsimleri KULLANMA:
let a = "An"; //Yanlış "a" değişkeni neyi ifade etmektedir? (Kodunuzun okunabilirliğini düşünün)

// 5# Ek Bilgi:
// Boolean tanımlarken is/has gibi ön ekler kullanılabilir.
let isAdmin = true; //Kullanıcı yönetici mi?
let hasPassword = false; //Kullanıcının şifresi var mı?

//Line Lenght (Satır Uzunluğu) Kuralı:
//Bir satırda 80 karakterden fazla kod yazmamaya özen gösterin. Uzun satırları alt satıra bölebilirsiniz. Sebebi ise kodun okunabilirliğini arttırmaktır.  
// "Prettier" eklentisi ile otomatik olarak bu kurala uyabilirsiniz.
// Prettier, kodunuzu otomatik olarak düzenleyen bir eklentidir. Satır uzunluğu, boşluklar, girintiler gibi konularda otomatik düzenleme yapar.