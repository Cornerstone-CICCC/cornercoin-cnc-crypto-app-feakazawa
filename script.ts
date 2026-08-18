let balance = 500.0;

class Withdrawal {
  amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  commit() {
    balance -= this.amount;
  }
}

const t1 = new Withdrawal(50.25);
t1.commit();
console.log("Transaction 1:", t1);

const t2 = new Withdrawal(9.99);
t2.commit();
console.log("Transaction 2:", t2);

console.log("Balance:", balance);
