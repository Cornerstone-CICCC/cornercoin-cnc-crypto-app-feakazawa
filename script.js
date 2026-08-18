"use strict";
// let balance = 500.0;
class Account {
    username;
    balance;
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
const myWithdraw = new Withdrawal(myAccount, 110);
myWithdraw.commit();
console.log("Balance1:", myAccount.getBalance);
const myDeposit = new Deposit(myAccount, 199.99);
myDeposit.commit();
console.log("Balance2:", myAccount.getBalance);
