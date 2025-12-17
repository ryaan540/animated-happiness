

const account = [
    { name: "naya", pin: "1234", account_number: "0001"},
    { name: "ryan", pin: "12345", account_number: "0002"},
];

function createAccount() {
    const name = prompt("Enter your name:");
    const pin = prompt("Set a 4-digit PIN:");
    const account_number = prompt("Set your account number:");

    const account = {
        name: name,
        pin: pin,
        account_number: account_number,
        amount: 0
    };
    console.log(account);
}
