$("document").ready(function() {
    $("#newBurger").on("click", function() {
        event.preventDefault();
        debugger;
        var burger = {
            name: $("#name").val()
        };
        var currentURL = window.location.origin;
        $.post(currentURL + "/newburger", burger, function() {
            alert("Added");
        });
    });
});