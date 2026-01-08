

 function changeH1Text() {
    let htmlh1 = document.querySelector("#testingh1");
    console.log(htmlh1);
    const date = new Date();
    htmlh1.innerHTML = `Time is ${date.toISOString()}`;
    }