const pErrorList = document.querySelectorAll(".pError");
const inputList = document.querySelectorAll("input");

const form = document.querySelector("form");
const layoutConc = document.getElementById("layoutConc");

const confirmBtn = document.getElementById("confirmBtn");
const continueBtn = document.getElementById("continueBtn");

const pErrorForm = {
    cardHE: document.getElementById("cardHE"),
    cardNE: document.getElementById("cardNE"),
    expE: document.getElementById("expE"),
    cvcE: document.getElementById("cvcE")
};

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
function isNum(value){
  return !(/^\d+$/.test(value))
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
function reloadPage(){
  window.location.reload();
} 

  let cardHInp = document.getElementById("cardHInp");
  let cardNInp = document.getElementById("cardNInp");
  let expMInp = document.getElementById("expMInp");
  let expYInp = document.getElementById("expYInp");
  let cvcInp = document.getElementById("cvcInp");

  confirmBtn.addEventListener("click", enter)
  continueBtn.addEventListener("click", reloadPage)

cardHInp.addEventListener("input", (event) => {

    resCardH.textContent = event.target.value.toUpperCase()
})
cardNInp.addEventListener("input", (event) => {
  let num = event.target.value

  let noSpace = num.replaceAll(" ", "")
    
  let valueFormat = noSpace.slice(0, 4) + " " + noSpace.slice(4, 8) + " " + noSpace.slice(8, 12) + " " + noSpace.slice(12, 16)
  
  resCardN.textContent = valueFormat

  })
expMInp.addEventListener("input", (event) => {
    resExpM.textContent = event.target.value
})
expYInp.addEventListener("input", (event) => {
    resExpY.textContent = event.target.value
})
cvcInp.addEventListener("input", (event) => {
    resCVC.textContent = event.target.value
})


function enter(){
  let valid = true
  
    pErrorList.forEach(error => {
      error.classList.remove("pError")
    });

    inputList.forEach(inp =>{
      inp.classList.remove("inpError")
      inp.removeAttribute("aria-invalid")
    });

  if (isEmpty(cardHInp.value)){
    valid = false
    pErrorForm.cardHE.textContent = "Can't be blank"
    pErrorForm.cardHE.classList.add("pError")
    cardHInp.classList.add("inpError")
    cardHInp.setAttribute("aria-invalid", "true")
    }else if(!isCardHV(cardHInp.value)){
      valid = false
    pErrorForm.cardHE.textContent = "Name not valid"
    pErrorForm.cardHE.classList.add("pError")
    cardHInp.classList.add("inpError")
    cardHInp.setAttribute("aria-invalid", "true")
    }


    if (isEmpty(cardNInp.value)){
      valid = false
    pErrorForm.cardNE.textContent = "Can't be blank"
    pErrorForm.cardNE.classList.add("pError")
    cardNInp.classList.add("inpError")
    cardNInp.setAttribute("aria-invalid", "true")
    }else if(!isCardNV(cardNInp.value)){
      valid = false
    pErrorForm.cardNE.textContent = "Card Number not valid"
    pErrorForm.cardNE.classList.add("pError")
    cardNInp.classList.add("inpError") 
    cardNInp.setAttribute("aria-invalid", "true")
    }


    if (isEmpty(expMInp.value)){
      valid = false
    pErrorForm.expE.textContent = "Can't be blank"
    pErrorForm.expE.classList.add("pError")
    expMInp.classList.add("inpError")
    expMInp.setAttribute("aria-invalid", "true")
    }else if(!isMonthV(Number(expMInp.value), Number(expYInp.value))){
      valid = false
    pErrorForm.expE.textContent = "Month not valid"
    pErrorForm.expE.classList.add("pError")
    expMInp.classList.add("inpError")
    expMInp.setAttribute("aria-invalid", "true")
    }else if(isNum(expMInp.value)){
    valid = false
    pErrorForm.expE.textContent = "Month not valid"
    pErrorForm.expE.classList.add("pError")
    expMInp.classList.add("inpError")
    expMInp.setAttribute("aria-invalid", "true")
    }


   if (isEmpty(expYInp.value)){
    valid = false
    pErrorForm.expE.textContent = "Can't be blank"
    pErrorForm.expE.classList.add("pError")
    expYInp.classList.add("inpError")
    expYInp.setAttribute("aria-invalid", "true")
    }else if(expYInp.value < YY || expYInp.value.length > 2){
      valid = false             
    pErrorForm.expE.textContent = "Year not valid"
    pErrorForm.expE.classList.add("pError")
    expYInp.classList.add("inpError")
    expYInp.setAttribute("aria-invalid", "true")
    }else if(isNum(expYInp.value)){
    valid = false
    pErrorForm.expE.textContent = "Year not valid"
    pErrorForm.expE.classList.add("pError")
    expYInp.classList.add("inpError")
    expYInp.setAttribute("aria-invalid", "true")
    }


    if (isEmpty(cvcInp.value)){
      valid = false
    pErrorForm.cvcE.textContent = "Can't be blank"
    pErrorForm.cvcE.classList.add("pError")
    cvcInp.classList.add("inpError")
    cvcInp.setAttribute("aria-invalid", "true")
    }else if(!isCvcV(cvcInp.value)){
      valid = false
    pErrorForm.cvcE.textContent = "CVC not valid"
    pErrorForm.cvcE.classList.add("pError")
    cvcInp.classList.add("inpError")
    cvcInp.setAttribute("aria-invalid", "true")
    }

     if (valid){
      form.style.display = "none"
      layoutConc.style.display = "flex"
     }
}
    
//TENHO Q REMVOER FOREACH INPUT UM  input.removeAttribute('aria-invalid');
//DPS EM CADA ERRO E NO SEU RESPECTIVO INPUT  aria-invalid="true" 
 


  
 