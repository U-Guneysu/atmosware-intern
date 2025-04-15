// ************* INPUT içindeki değeri(value) almak *************

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener("submit", formSubmit)

function formSubmit(event) {
    event.preventDefault() 
    console.log("İşlem Gerçekleşti")
    let scoreInputDOM = document.querySelector("#score")
    console.log("score", scoreInputDOM.value)
}