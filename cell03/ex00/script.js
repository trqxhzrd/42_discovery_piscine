window.addEventListener("DOMContentLoaded", function() {
    let btn = this.document.getElementById("btn");

    btn.addEventListener("click", function() {
        document.body.style.background = randColor();      
    });
});

const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
};