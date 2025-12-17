

console.log(document)
 let htmlBody = document.querySelector("body")
 console.log(htmlBody)

  let htmlH1 = document.querySelector("h1")
  console.log(htmlH1)

/*
accessing elements by id
*/
 let secondH1 = document.querySelector("#secondh1")
 console.log(secondH1) 


/*
accessing elements by class name
*/
 let elementByClass = document.querySelector(".cardp")
 console.log(elementByClass)


  /*
 accessing all paragraphs
 using querySelectorAll
 lists array of all paragraphs
 */
 let allParagraphs = document.querySelectorAll("p")
 console.log(allParagraphs)

 /*
 accessing all elements by class name
 using querySelectorAll
 lists array of all elements with class name c1
 */

 let allc1 = document.querySelectorAll(".c1")
 console.log(allc1)