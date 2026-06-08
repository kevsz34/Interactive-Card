const pErrorList = document.querySelectorAll(".pError");
const inputList = document.querySelectorAll("input");

const form = document.querySelector("form");
const layoutConc = document.getElementById("layoutConc");

const resCardN = document.getElementById("resCardN");
const resCardH = document.getElementById("resCardH");
const resExpM = document.getElementById("resExpM");
const resExpY = document.getElementById("resExpY");
const resCVC = document.getElementById("resCVC");

const now = new Date()
const yearN = String(now.getFullYear());
const YY = Number(yearN.slice(2,4))
const monthN = now.getMonth() + 1;
layoutConc.style.display = "none"


function isEmpty(value){
    return value === ""
}
function isCardHV(value){

  return /^[a-zA-Z ]+$/.test(value)
}
function isCardNV(value){
  let noSpace = value.replaceAll(" ", "")
  return /^\d{16}$/.test(noSpace)
}
function isMonthV(month, year){
  if(year === YY){
    return !(month < monthN)
  }else{
    return month >= 1 && month <= 12
  }
}
function isCvcV(value){
  return /^\d{3}$/.test(value)
}

  let cardHInp = document.getElementById("cardHInp");
  let cardNInp = document.getElementById("cardNInp");
  let expMInp = document.getElementById("expMInp");
  let expYInp = document.getElementById("expYInp");
  let cvcInp = document.getElementById("cvcInp");


cardHInp.addEventListener("input", (event) => {

    resCardH.innerHTML = event.target.value.toUpperCase()
})

cardNInp.addEventListener("input", (event) => {
  let num = event.target.value

  let noSpace = num.replaceAll(" ", "")
    
  let valueFormat = noSpace.slice(0, 4) + " " + noSpace.slice(4, 8) + " " + noSpace.slice(8, 12) + " " + noSpace.slice(12, 16)
  
  resCardN.innerHTML = valueFormat

  })
  

expMInp.addEventListener("input", (event) => {
    resExpM.innerHTML = event.target.value
})
expYInp.addEventListener("input", (event) => {
    resExpY.innerHTML = event.target.value
})

cvcInp.addEventListener("input", (event) => {
    resCVC.innerHTML = event.target.value
})

function enter(){

  
    pErrorList.forEach(error => {
      error.classList.remove("pError")
    });

    inputList.forEach(inpError =>{
      inpError.classList.remove("inpError")
    });

  if (isEmpty(cardHInp.value)){
    pErrorList[0].innerHTML = "Can't be blank"
    pErrorList[0].classList.add("pError")
    inputList[0].classList.add("inpError")
    }else if(!isCardHV(cardHInp.value)){
    pErrorList[0].innerHTML = "Name not valid"
    pErrorList[0].classList.add("pError")
    inputList[0].classList.add("inpError")
    }


    if (isEmpty(cardNInp.value)){
    pErrorList[1].innerHTML = "Can't be blank"
    pErrorList[1].classList.add("pError")
    inputList[1].classList.add("inpError")
    }else if(!isCardNV(cardNInp.value)){
    pErrorList[1].innerHTML = "Card Number not valid"
    pErrorList[1].classList.add("pError")
    inputList[1].classList.add("inpError") 
    }


    if (isEmpty(expMInp.value)){
    pErrorList[2].innerHTML = "Can't be blank"
    pErrorList[2].classList.add("pError")
    inputList[2].classList.add("inpError")
    }else if(!isMonthV(Number(expMInp.value), Number(expYInp.value))){
    pErrorList[2].innerHTML = "Month not valid"
    pErrorList[2].classList.add("pError")
    inputList[2].classList.add("inpError")
    }


   if (isEmpty(expYInp.value)){
    pErrorList[2].innerHTML = "Can't be blank"
    pErrorList[2].classList.add("pError")
    inputList[3].classList.add("inpError")
    }else if(expYInp.value < YY || expYInp.value.length > 2){ /*Aqui eu n sei se era pra fazer isso ou n, mas eu fiz essa validação de ano e eu tenho q validar a quantidade de caracteres tbm, pq eu posso colocar mais do q 4 */
    pErrorList[2].innerHTML = "Year not valid"
    pErrorList[2].classList.add("pError")
    inputList[3].classList.add("inpError")
    }


    if (isEmpty(cvcInp.value)){
    pErrorList[3].innerHTML = "Can't be blank"
    pErrorList[3].classList.add("pError")
    inputList[4].classList.add("inpError")
    }else if(!isCvcV(cvcInp.value)){
    pErrorList[3].innerHTML = "CVC not valid"
    pErrorList[3].classList.add("pError")
    inputList[4].classList.add("inpError")
    }
    //eu tenho q botar para n deixar colocar letras ali no cardN, e o inverso para o cardH
    //tenho q trocar para concluido quando todos os coisas estiverem de acordo
     if (!isEmpty(cardHInp.value) && isCardHV(cardHInp.value) && !isEmpty(cardNInp.value) && isCardNV(cardNInp.value) && !isEmpty(expMInp.value) && isMonthV(Number(expMInp.value), Number(expYInp.value)) && !isEmpty(expYInp.value) && !(expYInp.value < YY || expYInp.value.length > 2) && !isEmpty(cvcInp.value) && isCvcV(cvcInp.value) ){
      form.style.display = "none"
      layoutConc.style.display = "flex"
     }
} 


  
 