console.log("Задание 4");

const countTotalSalary = function(employees) {
  let totalSelary=0;
  const selarys = Object.values(employees);
  for (const selary of selarys) {
    totalSelary += selary;
  }
  return totalSelary;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400


console.log("--------------");