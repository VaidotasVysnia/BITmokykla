

window.addEventListener('DOMContentLoaded', ()=> {
    
    heightOutput = document.querySelector('#height');
    widthOutput = document.querySelector('#width');
    
    
    reportWindowSize()
    
    
}
)

window.addEventListener('resize', reportWindowSize);


let heightOutput, widthOutput;
function reportWindowSize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
}