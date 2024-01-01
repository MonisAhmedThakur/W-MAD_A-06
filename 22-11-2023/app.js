//tenary operator
/*
let userInput = false;

let userValue = userInput ? "Monis" : "Not"

? is used for IF statement
: is used for else statement

*/

let getData = new Promise((resolve,reject) =>  {


    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then((res)=>{console.log(res);})
    .catch((err)=>{console.log(err);})

    .then(()=>{resolve})
    .catch(()=>{err})

})