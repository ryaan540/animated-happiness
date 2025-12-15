/*
anything you do with while loop you can do with for loop

*/

function aboutMe(n) {
    for (let k =0; k <= n ; k=k+1){
        console.log("k is ",k);
        let date = new Date();
        let timestamp = date.toISOString();
        console.log(` i am a js engineer ${timestamp}`);
    }
}
aboutMe(10);
