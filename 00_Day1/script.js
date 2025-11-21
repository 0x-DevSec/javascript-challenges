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