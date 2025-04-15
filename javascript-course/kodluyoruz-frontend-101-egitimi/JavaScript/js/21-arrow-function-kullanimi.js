// ************* Arrow Function Kullanımı *************

function hello(firstName) {
  console.log(`Merhaba ${firstName}`);
}

hello("JavaScript");

const helloFuncV1 = (firstName) => {
  console.log(`Merhaba ${firstName}`);
};
helloFuncV1("helloFuncV1");

const helloFuncV2 = (firstName) => console.log(`Merhaba ${firstName}`);
helloFuncV2("helloFuncV2");

const helloFuncV3 = (firstName, lastName) =>
  console.log(`Merhaba ${firstName} ${lastName}`);
helloFuncV3("helloFuncV3", "Last Name Info");

const helloFuncV4 = (firstName, lastName) => {
  let info = `Merhaba ${firstName} ${lastName}`;
  console.log(info);
};

helloFuncV3("helloFuncV4", "Other Info");

// Eğer bir parametre üzerinde çalışıyorsan bunu parantez içine almana gerek yok 
// Birden fazla parametre ile çalışma durumunda parametreleri parantez içine al
// Eğer fat arrowdan sonra sadece bir işlem yazacaksan süslü parantez içine almana gerek yok
// Birden fazla işlem yapacaksan süslü paranteze almalısın  