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

  allowWithdraw(): boolean {
    if (
      this.user.getBalance === 0 ||
      Math.abs(this.value) > this.user.getBalance
    ) {
      return false;
    }

    return true;
  }

  commit() {
    if (this.allowWithdraw() === false) {
      throw new Error("Insuficient balance availabe");
    }

    this.user.setBalance = this.user.getBalance + this.value;
  }
}

class Deposit extends Transaction {
  constructor(user: Account, amount: number) {
    super(user, amount);
  }
}

// try withdrawal money when balance = 0
// const myAccount = new Account("snow-white", 0);
// myAccount.addBalance(myAccount.getBalance);
// const myWithdraw = new Withdrawal(myAccount, 240);
// myWithdraw.commit();
// myAccount.addBalance(myWithdraw.value);

// try withdrawal money when balance < withdrawal amount
const myAccount2 = new Account("snow-white", 100);
myAccount2.addBalance(myAccount2.getBalance);
const myWithdraw2 = new Withdrawal(myAccount2, 200);
myWithdraw2.commit();
myAccount2.addBalance(myWithdraw2.value);
