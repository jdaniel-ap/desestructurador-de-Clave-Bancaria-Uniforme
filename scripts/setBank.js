const userCbu = document.getElementById("cbu");
const searchBtn = document.getElementById("search");
const message = document.getElementById("message");
const state = {
  error: false,
};

function verify() {
  searchBtn.addEventListener("click", () => {
    userCbu.value.length === 22 ? dataSuccess(userCbu.value) : dataFailure();
  });
}

function dataSuccess(value) {
  const notFound = 'No encontrado'
  const switchValue = value.toString();
  const entityNumber = switchValue.substr(0, 3);
  const index = bankData.findIndex((element) => element.code == entityNumber);
  index < 0 ? setMessage(notFound) : setMessage(`${bankData[index].bank} CUIT ${bankData[index].cuit} `);
  
}

function setMessage(value) {
   return message.textContent = value;
}

function dataFailure() {
  const errorMessage =  "Los numeros introducidos son inferiores a los esperados. Se espera una cadena de numeros de 22 digitos";
  userCbu.className = "error";
  setMessage(errorMessage);
}

verify();
