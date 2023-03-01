 // находим элементы на странице
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

//  отслеживаем на кнопку "-"
btnMinus.addEventListener('click',function () {
  console.log('Minus click');
   // Проверяем счетчик, чтоб не уходил в минус
  if (parseInt(counter.innerText)>1 ) {
   
  

  counter.innerText = --counter.innerText ;
  }
});
//  отслеживаем на кнопку "+"
btnPlus.addEventListener('click',function () {
    console.log('Plus click');
    counter.innerText = ++counter.innerText ;

  });
