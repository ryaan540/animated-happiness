/*
create an atm object with properties and methods
*/

const atm = {
    amount : 1000,
    owmer : "naya wanjiku",
};

console.log(atm);
console.log(typeof atm);

function deposit() {
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
    console.log(`Deposited ${amount}. New balance: ${newAmount}`);
}

deposit();

function withdraw() {
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
    let newAmount = atm.amount - amount;
    atm.amount = newAmount;
    console.log(`Withdrew ${amount}. New balance: ${newAmount}`);
}

withdraw();
function getBalance() {
    console.log(`Current balance: ${atm.amount}`);
    const type = 'Balance Check';
    const amount = atm.amount;
    let date = new Date();
    let timeStamp = date.toISOString();
    console.log(timeStamp);
    console.log(`[${timeStamp}] ${type}: ${amount}. Balance: ${atm.amount}`);
}

getBalance();
console.log(atm);

function storeLastTransaction(amount, type , prevBalance) {
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

function showBalance() {
    if (atm.lastTransaction) {
        alert(`Hi, ${atm.owner},
             your current balance is ${atm.amount}
             Last Transaction ${atm.lastTransaction.type}
             Date ${atm.lastTransaction.timeStamp}
             prevBalance ${atm.lastTransaction.prevBalance}
             amount Transacted ${atm.lastTransaction.amount}
             `);
    } else {
        alert(`Hi, ${atm.owner}
            Balance ${atm.amount}`);
    }
}

showBalance();
   