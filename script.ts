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

class Transaction {
  user: Account;
  amount: number;

  constructor(user: Account, amount: number) {
    this.user = user;
    this.amount = amount;
  }

  get value() {
    return this.amount;
  }

  commit() {
    this.user.setBalance = this.user.getBalance + this.value;
  }
}
class Withdrawal extends Transaction {
  constructor(user: Account, amount: number) {
    super(user, amount);
  }

  get value() {
    return -this.amount;
  }
}

class Deposit extends Transaction {
  constructor(user: Account, amount: number) {
    super(user, amount);
  }
}

const myAccount = new Account("snow-patrol", 500);
const myWithdraw = new Withdrawal(myAccount, 110);
myWithdraw.commit();
console.log("Balance1:", myAccount.getBalance);

const myDeposit = new Deposit(myAccount, 199.99);
myDeposit.commit();
console.log("Balance2:", myAccount.getBalance);
