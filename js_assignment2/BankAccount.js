class BankAccount{
    constructor(accountNumber, accountHolderName, accountBalance){
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
    }
    deposit(ammount){
        this.accountBalance += ammount;
    }
}

class Savings extends BankAccount{
    constructor(accountNumber, accountHolderName, accountBalance, isSalary){
        super(accountNumber, accountHolderName, accountBalance);
        this.isSalary = isSalary;     
    }
    withdraw(ammount){
        if(this.accountBalance >= ammount){
            this.accountBalance -= ammount;
        }
        else{
            try{
                low_ammount = this.accountBalance < 1 || this.accountBalance < ammount;
            }
            catch(low_ammount){
                console.log("No Balance in your Account");
            }
        }
    }
    getAccountBalance(){
        console.log("Your Account Balance is : "+this.accountBalance+" ₹\n");
    }
}

class Current extends BankAccount{
    constructor(accountNumber, accountHolderName, accountBalance, odLimit){
        super(accountNumber, accountHolderName, accountBalance);
        this.odLimit = odLimit;
    }
    withdraw(ammount){
        if(this.accountBalance+20000 >= ammount){
            this.accountBalance -= ammount;
        }
        else{
            try{
                low_ammount = this.accountBalance < -20000 || this.accountBalance+20000 < ammount;
            }
            catch(low_ammount){
                console.log("No Balance in your Account");
            }
        }
    }
    getAccountBalance(){
        console.log("Your Account Balance is : "+this.accountBalance+" ₹\n");
    }
}

var savings = new Savings(589265328, "shabzan", 5000, true);
var current = new Current(358634578, "Ragadeep",10000, 20000);

savings.deposit(2000);
savings.getAccountBalance();

savings.withdraw(5000);
savings.getAccountBalance();

savings.withdraw(5000);
savings.getAccountBalance();

current.deposit(5000);
current.getAccountBalance();

current.withdraw(25000);
current.getAccountBalance();

current.withdraw(25000);
current.getAccountBalance();


