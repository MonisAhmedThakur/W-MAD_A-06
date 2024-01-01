// function bulbOn(){
//     var onBulb = document.getElementById("image");
//     onBulb.src = "./images/bulb_on.jpg";
// }

// function bulbOff(){
//     var offBulb = document.getElementById("image");
//     offBulb.src = "./images/bulb_off.jpg";
// }




function num(a){
    return function num(b){
        return function num(c){
            return function num(d){
                return a + b + c + d;
                
            }
        }
    }
}

console.log(num(2)(2)(2)(2));