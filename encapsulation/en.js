var Bank = /** @class */ (function () {
    function Bank(initialBalance) {
        if (initialBalance < 0)
            console.log("Initial balance cannot be negative.");
        this.balance = initialBalance;
    }
    Bank.prototype.deposite = function (amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be greater than zero.");
            return;
        }
        this.balance += amount;
        console.log("Successfully deposited $".concat(amount, ". Current balance: $").concat(this.balance));
    };
    Bank.prototype.withDraw = function (amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be greater than zero.");
            return;
        }
        if (amount > this.balance) {
            console.log("Insufficient funds for this withdrawal.");
            return;
        }
        this.balance -= amount;
        console.log("Successfully withdrew $".concat(amount, ". Remaining balance: $").concat(this.balance));
    };
    Bank.prototype.getBalance = function () {
        return this.balance;
    };
    return Bank;
}());
var account = new Bank(1000);
console.log(account.getBalance());
account.deposite(500);
account.deposite(800);
console.log(account.getBalance());
account.withDraw(0);
account.withDraw(2400);
account.withDraw(300);
console.log(account.getBalance());
