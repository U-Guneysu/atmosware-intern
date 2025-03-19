// ************* Array Filter Kullanımı *************

// 5 Harften Fazla Olanlar ??
const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
console.log(NEW_PRODUCTS)

// Aktif Kullanıcılar ??
const USERS = [
    {fullName: "Ayse Sumer", isActive: false},
    {fullName: "Ahmet Urgan", isActive: true},
    {fullName: "Asya Basar", isActive: true},
    {fullName: "Aksel Durmaz", isActive: false},
]

/* const ACTIVE_USERS = USERS.filter(user => user.isActive === true) */ // isActive === true değerlerini çekecektir
/* const ACTIVE_USERS = USERS.filter(user => user.isActive) */ //ikisi de aynı sonucu verir >> isActive === true değerlerini çekecektir

const ACTIVE_USERS = USERS.filter(user => user.isActive === false)// isActive === false değerlerini çekecektir
console.log(ACTIVE_USERS)