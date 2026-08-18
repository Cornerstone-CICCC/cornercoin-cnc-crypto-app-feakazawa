"use strict";
// let balance = 500.0;
class Account {
    username;
    balance;
    balances = [];
    constructor(username, balance) {
        this.username = username;
        this.balance = balance;
    }
    get getBalance() {
        return this.balance;
    }
    set setBalance(newBalance) {
        this.balance = newBalance;
    }
    addBalance(value) {
        this.balances.push(value);
    }
    trackTransaction() {
        return `All transactions: [${this.balances.join(", ")}]`;
    }
    accountBalance() {
        const result = this.balances.reduce((total, value) => total + value, 0);
        return `Account balance: ${result}`;
    }
}
class Transaction {
    user;
    amount;
    constructor(user, amount) {
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
    constructor(user, amount) {
        super(user, amount);
    }
    get value() {
        return -this.amount;
    }
}
class Deposit extends Transaction {
    constructor(user, amount) {
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
