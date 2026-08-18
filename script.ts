let balance = 500.0;

class Account {
  protected username: string;
  protected balance: number;

  constructor(username: string, balance: number) {
    this.username = username;
    this.balance = balance;
  }
}
class Withdrawal {
  amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  commit() {
    balance -= this.amount;
  }
}

class Deposit {
  amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  commit() {
    balance += this.amount;
  }
}

const myAccount = new Account("snow-patrol", 500);
console.log(myAccount);
