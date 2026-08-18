// let balance = 500.0;

class Account {
  protected username: string;
  protected balance: number;
  protected balances: number[] = [];

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

  addBalance(value: number): void {
    this.balances.push(value);
  }

  trackTransaction(): string {
    return `All transactions: [${this.balances.join(", ")}]`;
  }

  accountBalance(): string {
    const result = this.balances.reduce((total, value) => total + value, 0);
    return `Account balance: ${result}`;
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
myAccount.addBalance(myAccount.getBalance);
const myWithdraw = new Withdrawal(myAccount, 110);
myWithdraw.commit();
myAccount.addBalance(myWithdraw.value);

const myDeposit = new Deposit(myAccount, 199.99);
myDeposit.commit();
myAccount.addBalance(myDeposit.value);
console.log(myAccount.trackTransaction());
console.log(myAccount.accountBalance());
