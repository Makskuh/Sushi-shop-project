window.addEventListener('click',function (event) {
   // Обьявляем переменную для счетчика
   let counter;

   if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

      const counterWrapper = event.target.closest ('.counter-wrapper')
    
      counter = counterWrapper.querySelector('[data-counter]');
   }


   // Проверяем явл ли єлемент кнопкой +
  if(event.target.dataset.action === 'plus') {
   //  находим обертку счетчика

   counter.innerText = ++counter.innerText;
  }
     // Проверяем явл ли єлемент кнопкой -
  if(event.target.dataset.action === 'minus') {

   if (parseInt(counter.innerText)>1 ) {
      
      counter.innerText = --counter.innerText ;
   } else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
           event.target.closest('.cart-item').remove();
         toggleCartStatus();

         calcCartPriceAndDelivery();
      }   
      }

      // na + / -
      if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {

         calcCartPriceAndDelivery();
      }
      
});