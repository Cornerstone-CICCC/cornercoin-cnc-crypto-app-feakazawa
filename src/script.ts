class Account {
  private username: string;
  private balance: number = 0;
  private balanceTrack: number[] = [0];

  constructor(username: string) {
    this.username = username;
  }

  get getBalance() {
    const totalBalance = this.balanceTrack.reduce(
      (total, value) => total + value,
      0,
    );
    return Number(totalBalance.toFixed(2));
  }

  set setBalance(newBalance: number) {
    this.balance = newBalance;
  }

  get getBalanceTrack() {
    return this.balanceTrack;
  }

  clearBalance() {
    this.balance = 0;
    this.balanceTrack = [0];
  }
}

class Transaction {
  protected account: Account;
  protected amount: number;

  constructor(account: Account, amount: number) {
    this.account = account;
    this.amount = amount;
  }

  get value() {
    return this.amount;
  }

  commit() {
    this.account.getBalanceTrack.push(this.value);
    this.account.setBalance = this.account.getBalance + this.value;
  }
}
class Withdrawal extends Transaction {
  constructor(account: Account, amount: number) {
    super(account, amount);
  }

  get value() {
    return this.amount * -1;
  }

  allowWithdraw(): boolean {
    if (
      this.account.getBalance === 0 ||
      Math.abs(this.value) > this.account.getBalance
    ) {
      return false;
    }

    return true;
  }

  commit() {
    if (this.allowWithdraw() === false) {
      throw new Error("insuficient balance availabe");
    }

    this.account.getBalanceTrack.push(this.value);
    this.account.setBalance = this.account.getBalance + this.value;
  }
}

class Deposit extends Transaction {
  constructor(account: Account, amount: number) {
    super(account, amount);
  }
}

export { Account, Withdrawal, Deposit };
