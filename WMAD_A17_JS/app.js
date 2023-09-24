var forwardCy = 0;
var forwardWo = 1000;


function cyclops(){
    console.log(event.keyCode);
    var characterCy = document.getElementById('characterCy');
    if(event.keyCode === 68 && forwardCy < 1000) {
        forwardCy = forwardCy + 10;
        characterCy.style.left = forwardCy + 'px';
        characterCy.src = 'images/cy-walk.gif';
    }
    if(event.keyCode === 65 && forwardCy > 10) {
        forwardCy = forwardCy - 10;
        characterCy.style.left = forwardCy + 'px';
        characterCy.src = 'images/cy-walk.gif';
    }
    if(event.keyCode === 32) {
        characterCy.style.width = '350px';
        characterCy.style.height = '350px';
        characterCy.style.bottom = '-55px';
        characterCy.src = 'images/cy-blast.gif';
        setTimeout(function () {
            characterCy.src = 'images/cy-stance.gif';
            characterCy.style.width = '200px';
            characterCy.style.height = '200px';
            characterCy.style.bottom = '30px';
        }, 2000);
    }
}

function wolverine(){
    var characterWo = document.getElementById('characterWo');
    if(event.keyCode === 74  && forwardWo > 20) {
        forwardWo = forwardWo - 20;
        characterWo.style.left = forwardWo + 'px';
        characterWo.src = 'images/wo-walk.gif';
        characterWo.style.width = '300px';
        characterWo.style.height = '300px';
    }
    if(event.keyCode === 76  && forwardWo < 900) {
        forwardWo = forwardWo + 20;
        characterWo.style.left = forwardWo + 'px';
        characterWo.src = 'images/wo-walk.gif';
        characterWo.style.width = '300px';
        characterWo.style.height = '300px';
    }
    if(event.keyCode === 16) {
        characterWo.style.width = '350px';
        characterWo.style.height = '350px';
        characterWo.style.bottom = '-55px';
        characterWo.src = 'images/wo-attacks.gif';
        setTimeout(function () {
            characterWo.src = 'images/wo-stance.gif';
            characterWo.style.width = '240px';
            characterWo.style.height = '240px';
            characterWo.style.bottom = '30px';
        }, 2000);
    }
}

window.onkeydown = cyclops;
window.onkeyup = wolverine;