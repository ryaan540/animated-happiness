
function hello() {
    console.log("Hello, world!");
}

function countToN() {
    return new Promise((resolve,reject) => {
    for (let i = 0; i < 300000000; i++); {}
    console.log("complete counting");
    });
}
     
function bye() {
    console.log("Bye for now");
}

hello();
countToN();
bye();
