console.log("Задание 7");

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Каждая транзакция это объект со свойствами: id, type и amount
   */
  
  const account = {
    // Текущий баланс счета
    balance: 0,
  
    // История транзакций
    transactions: [],
  
    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
      return {id: this.transactions.length+1, amount, type};
    },
  
    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
      this.balance +=amount;
      const newBalance = this.createTransaction(amount, Transaction.DEPOSIT);
      this.transactions.push(newBalance);
    },
  
    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
      if(this.balance >= amount){
        const newBalance = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(newBalance);
        this.balance -= amount;
      }else {
        console.log(`Cнятие такой суммы невозможно, недостаточно средств ${amount - this.balance}`); 
      }
    },
  
    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
      return this.balance;
    },
  
    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
      for (const transaction of this.transactions) {
        if (transaction.id === id) {
          return transaction;
        }
      }
      return `Неверный ${id} транзакции`;
    },
  
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
      let total = 0;
      for (let transaction of this.transactions) {
        if (transaction.type === type) {
          total += transaction.amount;
        }
      }
      return `Сумма типа ${type} транзакций равна ${total}`;
    },
  };

console.log(account.getBalance());
account.deposit(25000);
console.log(account.getBalance());
account.withdraw(25500);
console.log(account.getBalance());
account.withdraw(20000);
console.log(account.getBalance());
account.deposit(16000);
account.deposit(10000);
account.withdraw(2000);
account.withdraw(2000);
console.log(account.getBalance());
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));


console.log("--------------");