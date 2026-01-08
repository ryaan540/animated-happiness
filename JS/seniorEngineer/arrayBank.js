




const accounts = [
    { name: "naya", pin: "1234", account_number: "0001", amount: 0 },
    { name: "ryan", pin: "12345", account_number: "0002", amount: 0 },
];

let atm = null;

function createAccount() {
    const name = prompt("Enter your name:");
    const pin = prompt("Set a 4-digit PIN:");
    const account_number = prompt("Set your account number:");

    for (let i = 0; i < accounts.length; i++) {
        console.log("i is " + i);
        let singleAccount = accounts[i];
        if (singleAccount.account_number === account_number) {
            alert(`account number ${account_number} already exists`);
            return;
        }
    }

    const account = {
        name: name,
        pin: pin,
        account_number: account_number,
        amount: 0
    };

    accounts.push(account);
}


function loginUser() {
    const account_number = prompt("Enter your account number:");
    const pin = prompt("Enter your PIN:");
    let foundAccount = null;

    for (let i = 0; i < accounts.length; i++) {
        let singleAccount = accounts[i];
        if (account_number === singleAccount.account_number) {
            foundAccount = singleAccount;
            break;
        }
    }

    if (!foundAccount) {
        alert(`Account number ${account_number} not found`);
        return;
    }

    if (pin !== foundAccount.pin) {
        alert("Incorrect PIN");
        return;
    }

    atm = foundAccount;
}

function deposit() {
    if (!atm) {
        alert('Log in please');
        return;
    }

    const input = prompt('Enter deposit amount:');
    const amount = Number(input);

    if (Number.isNaN(amount)) {
        alert('Invalid input: please enter a number.');
        return;
    }

    if (amount <= 0) {
        alert('Invalid input: amount has to be greater than one');
        return;
    }

    let newAmount = atm.amount + amount;
    atm.amount = newAmount;

    storeLastTransaction(amount, 'Deposit', newAmount - amount);
    console.log(`Deposited ${amount}. New balance: ${newAmount}`);
}

function withdraw() {
    if (!atm) {
        alert('Log in please');
        return;
    }

    const input = prompt('Enter withdrawal amount:');
    const amount = Number(input);

    if (Number.isNaN(amount)) {
        alert('Invalid input: please enter a number.');
        return;
    }

    if (amount <= 0) {
        alert('Invalid input: amount has to be greater than one');
        return;
    }

    if (amount > atm.amount) {
        alert('Insufficient funds.');
        return;
    }

    let prevBalance = atm.amount;
    atm.amount -= amount;

    storeLastTransaction(amount, 'Withdrawal', prevBalance);
}

function getBalance() {
    if (!atm) {
        alert('Log in please');
        return;
    }

    console.log(`Current balance: ${atm.amount}`);
    const type = 'Balance Check';
    const amount = atm.amount;
    let date = new Date();
    let timeStamp = date.toISOString();

    console.log(`[${timeStamp}] ${type}: ${amount}. Balance: ${atm.amount}`);
}

function storeLastTransaction(amount, type, prevBalance) {
    let date = new Date();
    let transaction = {
        type: type,
        amount: amount,
        prevBalance: prevBalance,
        timeStamp: date.toISOString()
    };

    atm.lastTransaction = transaction;
    console.log('Last Transaction:', transaction);
}

function logOut() {
    atm = null;
}

function showBalance() {
    if (!atm) {
        alert('Log in please');
        return;
    }

    if (atm.lastTransaction) {
        alert(`Hi, ${atm.name},
your current balance is ${atm.amount}
Last Transaction ${atm.lastTransaction.type}
Date ${atm.lastTransaction.timeStamp}
Prev Balance ${atm.lastTransaction.prevBalance}
Amount Transacted ${atm.lastTransaction.amount}
`);
    } else {
        alert(`Hi, ${atm.name}
Balance ${atm.amount}`);
    }
}
