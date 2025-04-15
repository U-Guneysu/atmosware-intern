// ************* FORMLARLA ÇALIŞMAK: Bölüm Sonu Egzersizi *************

/* 
1: Formu Seç
2: Input Bilgisini UL İçerisine Ekle
3: Form İçindeki Bilgiyi Sıfırla
4: Eğer forma bilgi girilmezse kullanıcıyı uyar 
*/


let userFormDOM = document.querySelector("#userForm");
userFormDOM.addEventListener("submit", formHandler);
const alertDOM = document.querySelector("#alert")

const alertFunction = (title, message, className = "warning") => ` 
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event) {
  event.preventDefault();
  const USER_NAME = document.querySelector("#username");
  const SCORE = document.querySelector("#score");
  if(USER_NAME.value && SCORE.value){ //Başarılı bir gönderim sonucunda değerler sıfırlanır
    addItem(USER_NAME.value, SCORE.value);
    USER_NAME.value = ""
    SCORE.value = ""
    alertDOM.innerHTML = alertFunction("BAŞARILI!!", "Girdiğiniz Değerler Liste Üzerine Eklendi", "success")
  } else {
    alertDOM.innerHTML = alertFunction("UYARI!!", "Hatalı veya Eksik Bilgi Girilmiştir.", "info")
    addItem(USER_NAME.value, SCORE.value);
    USER_NAME.value = "İşlem: ÖRNEK Değer"
    SCORE.value = 85
  }
}

let userListDOM = document.querySelector("#userList");


const addItem = (userName, score) => {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `
    ${userName} 
    <span class="badge text-bg-primary rounded-pill">${score}</span>`;

  liDOM.classList.add(
    'list-group-item', 
    'd-flex',
    'justify-content-between',
    'align-items-center'
  );
  userListDOM.append(liDOM);
};
