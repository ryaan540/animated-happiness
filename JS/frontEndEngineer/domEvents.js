

let c = 0;
function counter() {
    //console.log(`Time has passed in seconds`,c)
    let timeSpent = "";
    const timeSpentHtmlElement = document.getElementById("timeSpent");

    if(c / 3600 >= 1){
        timeSpent = `${Math.floor(c / 3600)} hours`;
    }else if (c / 60 >= 1) {
        timeSpent = `${Math.floor(c / 60)} minutes`;
    }else {
        timeSpent = `${c} seconds`
    }
    timeSpentHtmlElement.innerHTML = timeSpent;
    
    c++;

}

setInterval(counter, 1000);