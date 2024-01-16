
document.addEventListener("DOMContentLoaded",()=>{
    window.scrollTo({
        top: 0
    });
})


var menu = document.getElementById("section-1");

const scroolToMenu =()=>{
    
    window.scrollTo({
        top: menu.offsetTop - 50,
        behavior: 'smooth'
    });
}