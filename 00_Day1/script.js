// Challenge 1: Change background on page load
window.addEventListener('load',function(){
    const div1 = document.getElementById('challenge-1')
    div1.style.backgroundColor = "red"
})

// challenge 2: On click, change this div’s background color
window.addEventListener('click',function(){
    const div2 = document.getElementById('challenge-2')
    div2.style.backgroundColor = "blue";
})

// Challenge 3: On click, change all divs’ background colors.
document.getElementById("challenge-3").addEventListener('click',function(){
    const divall = document.querySelectorAll(".container div")
    divall.forEach(div => {
        div.style.backgroundColor = "red";
    })
})

// challenge 4: On click, change this div’s text content.
document.getElementById("challenge-4").addEventListener('click', function(){
    const div4 = document.getElementById('challenge-4');
    div4.innerText = "text changed";
})

// challenge 5: On click, increment a counter displayed inside this div.
document.getElementById('challenge-5').addEventListener('click',function (){
    let counter = Number(this.textContent);
    this.textContent = counter + 1;
})


// Challenge 6: Add an input inside; display its value live below it (on change).
const div6 = document.getElementById('challenge-6');

const input = document.createElement('input');
const output = document.createElement('p');

div6.appendChild(input);
div6.appendChild(output);

input.addEventListener('input',function(){
    output.textContent = input.value;
})

// challenge7: Add a form; on submit, validate that input isn’t empty.

const div7 = document.getElementById('challenge-7');
const form = document.createElement('form');
const myinput = document.createElement('input');
const btn = document.createElement('button');


myinput.type = 'text';
myinput.placeholder = 'Type something...';
btn.textContent = 'Submit';


form.appendChild(myinput);
form.appendChild(btn);
div7.appendChild(form);

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (myinput.value.trim() === "") {
        alert('Input can’t be empty');
    } else {
        alert('Form submitted successfully!');
    }
});

// challenge8: On hover, increase this div’s size smoothly.

const div8 = document.getElementById('challenge-8');

div8.style.width = '90px';
div8.style.height = '90px';
div8.style.backgroundColor = "lightgray";
div8.style.transition = "all 0.3s ease"; 

div8.addEventListener('mouseenter', function () {
    div8.style.width = "100px";
    div8.style.height = "100px";
    div8.style.transform = "scale(1.1)";
});

div8.addEventListener('mouseleave', function () {
    div8.style.width = "90px";
    div8.style.height = "90px";
    div8.style.transform = "scale(1)";
});























