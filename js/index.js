// Demonstrate Listening to Events on a DOM Node with addEventListener()
const main = document.getElementById('main');

main.addEventListener('click', function(event){
    alert('I was clicked');
})

// Triggering Events Listeners on DOM Nodes
const input = document.querySelector('input');

// input.addEventListener('keydown', function(e){
//     console.log(e.key);
// })

// Demonstrate Preventing the Default Behavior for DOM Nodes
input.addEventListener('keydown', function(e){
    if (e.key === 'g'){
        return e.preventDefault() //Stops shit from working
    } else {
        console.log(e.key);
    }
})

// Bubbling and Capturing Events
let divs = document.querySelectorAll('div');

function bubble(e) {
    e.stopPropagation();
    console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i <divs.length; i++){
    divs[i].addEventListener('click',bubble);
}

// Capturing Events
function captured(e) {
    console.log(this.firstChild.nodeValue.trim() + ' captured');
}

for (let i = 0; i <divs.length; i++){
    divs[i].addEventListener('click',captured,true);
}

