/*

*/
let learnStuff = [
    4,
    'JS',
    true,
    { 
        name: 'John',
         age: 30 
    },
    [1, 2, 3],
    null,
    undefined,
    function greet() {
        alert('goodmorning');
    }


]
console.table(learnStuff);
console.log(learnStuff[3]['name']);
console.log(learnStuff[4][1]);
console.log(learnStuff[7]());
console.log(learnStuff[2]);
console.log(learnStuff[0]);
console.log(learnStuff[1]);
console.log(learnStuff[5]);
console.log(learnStuff[6]);

learnStuff[0] = 5;
learnStuff[1] = 'JavaScript';
learnStuff[2] = false;
learnStuff[3] = { name: 'Jane', age: 25 };
learnStuff[4] = [4, 5, 6];
learnStuff[5] = 'Now not null';
learnStuff[6] = 'Now defined';
learnStuff[7] = function farewell() {
    alert('goodbye');
}
learnStuff.push('New Element');
learnStuff[learnStuff.length] = 'Another New Element';


console.table(learnStuff);
console.log(learnStuff[3]['name']);
console.log(learnStuff[4][1]);
console.log(learnStuff[7]());
console.log(learnStuff[2]);
console.log(learnStuff[0]);
console.log(learnStuff[1]);
console.log(learnStuff[5]);
console.log(learnStuff[6]);