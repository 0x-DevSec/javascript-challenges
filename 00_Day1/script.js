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


