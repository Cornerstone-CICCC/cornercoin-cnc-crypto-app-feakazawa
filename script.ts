// let balance = 500.0;

class Account {
  protected username: string;
  protected balance: number;

  constructor(username: string, balance: number) {
    this.username = username;
    this.balance = balance;
  }

  get getBalance() {
    return this.balance;
  }

  set setBalance(newBalance: number) {
    this.balance = newBalance;
  }
}
class Withdrawal {
  user: Account;
  amount: number;

  constructor(user: Account, amount: number) {
    this.user = user;
    this.amount = amount;
  }

  commit() {
    this.user.setBalance = this.user.getBalance - this.amount;
  }
}

class Deposit {
  user: Account;
  amount: number;

  constructor(user: Account, amount: number) {
    this.user = user;
    this.amount = amount;
  }

  commit() {
    this.user.setBalance = this.user.getBalance + this.amount;
  }
}

const myAccount = new Account("snow-patrol", 500);
const myWithdraw = new Withdrawal(myAccount, 110);
myWithdraw.commit();

const myDeposit = new Deposit(myAccount, 199.99);
myDeposit.commit();
console.log(myAccount.getBalance);
