function calcCartPriceAndDelivery() {
    const cartItems = document.querySelectorAll('.cart-item');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]')
     
    let totalPrice = 0 ;

    cartItems.forEach(function(item) {


       const amountEl =  item.querySelector('[data-counter]');
       const priceEl = item.querySelector('.price__currency');

       const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
    
      totalPrice += currentPrice ; 
    })
    const totalCost =  document.querySelector('.total-price');
    totalCost.innerText = totalPrice
    if(totalPrice > 0) {
      cartDelivery.classList.remove('none');
    } else {
      cartDelivery.classList.add('none')
    }
    
    
    if(totalPrice >= 500) {
    
    deliveryCost.classList.add('free');
    deliveryCost.innerText = 'Бесплатно'
    }else {
      deliveryCost.classList.remove('free')
      deliveryCost.innerText = '50 грн'

    }
}
