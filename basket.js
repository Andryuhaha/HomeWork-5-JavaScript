'use strict';

var contentBasket = document.getElementById("basketID");
var countBasket = document.getElementById("basketIDCount");
var count;
var sum;
	
var    basket = [
            {name:'Объ', amount: 1, price: 3600, id: 1}, 
            {name:'Казанка', amount: 2, price: 7200, id: 1},
            {name:'Неман 2', amount: 1, price: 4800, id: 1}
    ];
        
function countBasketPrice(bsk) {
            var sum = 0;
            for (var i = 0; i<bsk.length; i++) { 
            sum = sum + bsk[i].price*bsk[i].amount;
    }
    return sum;   
}

sum = countBasketPrice(basket);

if (sum !=0) {
	contentBasket.innerHTML = "Сумма корзины: " + sum;
} else {
	contentBasket.innerHTML = "Корзина пуста";
}

function countAmountItems(bsk) {
	var count = 0;
	for (var i = 0; i<bsk.length; i++) {
		count = count + bsk[i].id;
	} return count;
}

count = countAmountItems(basket);
countBasket.innerHTML = "Количество товаров в корзине: " + count;
