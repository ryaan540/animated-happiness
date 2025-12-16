


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


function arrayLoop(n) {
    for (let k =0; k <= n ; k=k+1){
        console.log("k is ",k);
        let date = new Date();
        let timestamp = date.toISOString();
        console.log(` array loop ${timestamp}`);
    }
}
arrayLoop(10);
 
function from0to10() {
    let k = 0;
    while (k <= 10) {
        console.log("k is ", k);
        k++;
    }
}
from0to10(10);