$(function () {
    $("#profile").click(function () {
        let id = $("#dropdown")
        switch (id.attr("class")) {
            case "dropdown-hidden":
                id.attr("class", "dropdown");
                break;
            case "dropdown":
                id.attr("class", "dropdown-hidden");
                break;
        }
    })
})