const userCbu = document.getElementById("cbu");
const searchBtn = document.getElementById("search");
const message = document.getElementById("message");

function verify() {
  searchBtn.addEventListener("click", () => {
    userCbu.value.length === 22 ? dataSuccess(userCbu.value) : dataFailure();
  });
}

function dataSuccess(value) {
  const notFound = 'No encontrado'
  const switchValue = value.toString();
  const entityNumber = switchValue.substr(0, 3);
  const branchNumber = switchValue.substr(3, 4);
  const accountNumber = switchValue.substr(8, 13)
  const index = bankData.findIndex((element) => element.code == entityNumber);
  index < 0 ? setMessage(notFound) : setMessage(`${bankData[index].bank} <br> Sucursal: ${branchNumber} <br> Nº de cuenta: ${accountNumber} <br> CUIT: ${bankData[index].cuit}`);
  userCbu.className = "success";
  
}

function setMessage(value) {
   return message.innerHTML = value;
}

function dataFailure() {
  const errorMessage =  "Los numeros introducidos son inferiores a los esperados. Se espera una cadena de numeros de 22 digitos";
  userCbu.className = "error";
  setMessage(errorMessage);
}

verify();
