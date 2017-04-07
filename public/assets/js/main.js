$("document").ready(function() {
    var currentURL = window.location.origin;

    $("#newBurger").on("click", function() {
        event.preventDefault();
        var burger = {
            name: $("#name").val()
        };
        $.post(currentURL + "/newburger", burger, function() {
            location.reload();
        });
    });
    $("#undo").on("click", function() {
        console.log("undo");
    });
    $("#eat").on("click", function() {
        console.log("eat");
    });
    $("#delete").on("click", function() {
        console.log("delete");
    });

});