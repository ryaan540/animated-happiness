/*
enables youto run a block of code repeatedly
while a specified condition is true.
*/

function aboutMe(n) {
    let runAgain = true;
    let k = 0;
   while (k !== n) {
    console.log("N is ", n); //n=5,=4
  console.log("I am a js engineer"); //Task 1
  let timestamp = new Date(); //Task 2
  console.log(timestamp.toISOString()); //Task 3
  k = k + 1;
  // if (k == n) {
   // runAgain = false; //Exit condition
  // }
   console.log("after the loop");
}
 //  break; //Call the function with 10
}
aboutMe(5); //Call the function with 5