



const fs = require("fs");

function createFile(f_name) {
    fs.writeFileSync(f_name, "");
}

//createFile("virus.txt");

function writeFile(f_name, text) {
    fs.appendFileSync(f_name, text );
}

//writeFile("virus.txt", "pay 3k today");

function main() {
    let filename = "virus.txt";
    createFile(filename);
    let n = 50;
    let k = 0;
    while(k !== n) {
        let date = new Date();
        let timestamp = date.toISOString();
        let text = `pay 3k now ${timestamp}\n`;
        writeFile(filename, text);
        k = k + 1;
        console.log("k is ", k);
    }
}
main();