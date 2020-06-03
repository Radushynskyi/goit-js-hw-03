console.log("Задание 6");

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];
  
  const calculateTotalPrice = function(allProdcuts, productName) {
      let totalPrise = 0;
      for (const product of allProdcuts) {
        //   console.log(product);
        //   console.log(product.name);
          if(productName === product.name){
            totalPrise = product.price * product.quantity;
            break;
          }
      }
    return totalPrise;
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(calculateTotalPrice(products, 'Радар')); // 5200
  
  console.log(calculateTotalPrice(products, 'Дроид')); // 2800

console.log("--------------");