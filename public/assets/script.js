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
});

$('button[name="like"]').on('click', function(e) {
    e.preventDefault();
    const endpoint = '/posts/' + $(this).data('like');
    let likeCount = $('#likeCount-' + $(this).data('like'));
    fetch(endpoint, {
        method: 'PUT',
    }).then(likeCount.text(parseInt(likeCount.text()) + 1),
        $(this).prop('disabled', true));
});