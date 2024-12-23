// Access Modifiers
// public Accessible from anywhere
// private Not accessible from outside
// protected Accessible within class and subclasses

class Bank {
  private balance: number;
  constructor(initialBalance: number) {
    if (initialBalance < 0) console.log("Initial balance cannot be negative.");
    this.balance = initialBalance;
  }

  deposite(amount: number): void {
    if (amount <= 0) {
      console.log("Deposit amount must be greater than zero.");
      return;
    }
    this.balance += amount;
    console.log(
      `Successfully deposited $${amount}. Current balance: $${this.balance}`
    );
  }

  withDraw(amount: number): void {
    if (amount <= 0) {
      console.log("Withdrawal amount must be greater than zero.");
      return;
    }
    if (amount > this.balance) {
      console.log("Insufficient funds for this withdrawal.");
      return;
    }
    this.balance -= amount;
    console.log(
      `Successfully withdrew $${amount}. Remaining balance: $${this.balance}`
    );
  }
  getBalance(): number {
    return this.balance;
  }
}

const account = new Bank(1000);
console.log(account.getBalance());
account.deposite(500);
account.deposite(800);
console.log(account.getBalance());
account.withDraw(0)
account.withDraw(2400)
account.withDraw(300)
console.log(account.getBalance());
