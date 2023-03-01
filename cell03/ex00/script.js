const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
};

function changecouleur() {
    $("body").css("background-color", randColor ());
}