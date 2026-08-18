"use strict";
let balance = 500.0;
class Account {
    username;
    balance;
    constructor(username, balance) {
        this.username = username;
        this.balance = balance;
    }
}
class Withdrawal {
    amount;
    constructor(amount) {
        this.amount = amount;
    }
    commit() {
        balance -= this.amount;
    }
}
class Deposit {
    amount;
    constructor(amount) {
        this.amount = amount;
    }
    commit() {
        balance += this.amount;
    }
}
const myAccount = new Account("snow-patrol", 500);
console.log(myAccount);
