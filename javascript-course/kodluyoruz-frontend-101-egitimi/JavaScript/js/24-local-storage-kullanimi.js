// ************* Local Storage Kullanımı *************

//localStorage.getItem()    -> Veri Okuma
//localStorage.setItem()    -> Veri Ekleme
//localStorage.removeItem() -> Veri Silme

let user = {userName: "umutG", isActive: true}
localStorage.setItem("userInfo", JSON.stringify(user))

let userInfo = localStorage.getItem("userInfo")//Bilgi Alındı
userInfo =JSON.parse(userInfo)
console.log(userInfo)

