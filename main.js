var data_number=document.querySelectorAll('[data-number]')
const previousOperandElement = document.querySelector('.previous-operand');
const operatorElement = document.querySelectorAll('[data-operation]');
const aquel = document.querySelector('[data-aquel]');
const deleteOne = document.querySelector('.calculator-grid .delete');
const clearAll = document.querySelector('[data-clear-all]');
for(var i = 0 ; i <data_number.length; i++){
    data_number[i].addEventListener('click',function(){
        previousOperandElement.innerHTML += this.innerHTML
    })
}


for(var b = 0; b< operatorElement.length ; b++){
    operatorElement[b].addEventListener('click',function(){
        previousOperandElement.innerHTML += this.innerHTML
    })
}


aquel.addEventListener('click',function(){
    previousOperandElement.innerHTML=eval(previousOperandElement.innerHTML)
})

deleteOne.onclick=function(){
   previousOperandElement.innerHTML = previousOperandElement.innerHTML.toString().slice(0,-1)
}


clearAll.onclick=function(){
    previousOperandElement.innerHTML = ""
}