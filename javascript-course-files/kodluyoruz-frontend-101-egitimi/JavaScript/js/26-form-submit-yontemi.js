// ************* Form Submit *************

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener("submit", formSubmit)

function formSubmit(event) {
    event.preventDefault() 
    console.log("İşlem Gerçekleşti")
}