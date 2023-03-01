$("#baloon").css("background-color", "red");

$("#baloon").off("click").on("click", function() {
    changeColor();
    $("#baloon").css("height", "+=10px");
    if ($("#baloon").height() >= 420) {
        $("#baloon").height(200);
    }
});
$("#baloon").mouseenter(function() {
    if (!$("#baloon").height()) return;
    if ($("#baloon").height() <= 200) return;
    reverseChangeColor();
    $("#baloon").css("height", "-=5px");
});


function changeColor() {
    switch ($("#baloon").css("background-color")) {
        case "rgb(255, 0, 0)":
            $("#baloon").css("background-color", "green");
            break;
        case "rgb(0, 128, 0)":
            $("#baloon").css("background-color", "blue");
            break;
        case "rgb(0, 0, 255)":
            $("#baloon").css("background-color", "red");
            break;
    }
}

function reverseChangeColor() {
    switch ($("#baloon").css("background-color")) {
        case "rgb(255, 0, 0)":
            $("#baloon").css("background-color", "blue");
            break;
        case "rgb(0, 128, 0)":
            $("#baloon").css("background-color", "red");
            break;
        case "rgb(0, 0, 255)":
            $("#baloon").css("background-color", "green");
            break;
    }
}