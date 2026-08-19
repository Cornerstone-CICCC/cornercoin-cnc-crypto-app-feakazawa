import { Account, Withdrawal, Deposit } from "../script";

const myAccount = new Account("snow-patrol");
const myDeposit = new Deposit(myAccount, 500);
const withdrawal1 = new Withdrawal(myAccount, 50.25);
const withdrawal2 = new Withdrawal(myAccount, 9.99);
const withdrawal3 = new Withdrawal(myAccount, 720);

afterEach(() => {
  myAccount.clearBalance();
});

describe("Testing account balance", () => {
  test("Open an account successfully", () => {
    expect(myAccount.getBalance).toBe(0);
  });

  test("Open an account and make a deposit", () => {
    myDeposit.commit();
    expect(myAccount.getBalance).toBe(500);
  });

  test("Open an account, make a deposit and withdrawal some money", () => {
    myDeposit.commit();
    withdrawal1.commit();
    withdrawal2.commit();
    expect(myAccount.getBalance).toBe(439.76);
  });

  test("Open an account and withdrawal some money", () => {
    expect(() => withdrawal1.commit()).toThrow("insuficient balance availabe");
  });

  test("Open an account, make a deposit and withdrawal an amount bigger than your balance", () => {
    myDeposit.commit();
    expect(() => withdrawal3.commit()).toThrow("insuficient balance availabe");
  });
});

describe("Testing account tracking transactions", () => {
  test("Consulting account transactions history when you open an account", () => {
    expect(myAccount.getBalanceTrack).toEqual([0]);
  });

  test("Consulting account transactions history after making deposits and withdrawals", () => {
    myDeposit.commit();
    withdrawal1.commit();
    withdrawal2.commit();
    myDeposit.commit();
    myDeposit.commit();
    withdrawal3.commit();
    expect(myAccount.getBalanceTrack).toEqual([
      0, 500, -50.25, -9.99, 500, 500, -720,
    ]);
  });
});
