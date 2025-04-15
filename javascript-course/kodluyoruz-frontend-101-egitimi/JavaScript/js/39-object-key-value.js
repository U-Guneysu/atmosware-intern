// ************* Object Key - Value *************
function araBosluk(){
    console.log("---------------------")
}

// [key1:1, key2:2, key3:3, key4:4]
let laptop1 = {
  brand: "Apple",
  model: "Macbook Pro",
  "2kg": 2, 
  modelName: "Macbook Pro",
  /* model-name: "Macbook Pro" */ //Declaration or statement expected.
  model_name: "Macbook Pro"
}

console.log(laptop1)
araBosluk()
// Doğru Anahtar Bilgisini Oluşturmak
console.log(laptop1.brand)
console.log(laptop1.model)
console.log(laptop1["2kg"])
araBosluk()
// Anahtar Bilgisine Yeni Değer Eklemek
laptop1.brand = "Mac"
laptop1["brand"] = "Mac1"
console.log(laptop1)
araBosluk()
// Yeni Bilgi Eklemek
laptop1.version = "10.15.7"
console.log(laptop1)
araBosluk()
// Anahtar Bilgisine Ulaşmak (keys) -> Object.keys(item)
keys = Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))

keys.forEach(keyInfo => {
    console.log(keyInfo)
    console.log(laptop1[keyInfo])
})
araBosluk()
// Değer Bilgilerine Ulaşmak (values) -> Object.values(item)
console.log(
    Object.values(laptop1)
)

let values = Object.values(laptop1)

values.forEach(value => {
    console.log("value: ", value)
})
