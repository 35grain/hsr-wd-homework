
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

const displayPosts = function(data) {
    const mainFeed = $('.feed');

    for (post of data) {

        const postDiv = $('<div class="userPost"></div>');

        // Profile picture and username
        const postAuthor = $('<div></div>');
        if (post.author.profilePicture !== "")
            postAuthor.append($('<img src="' + post.author.profilePicture + '" alt="Profile picture">'));
        else
            postAuthor.append($('<img src="assets/img/defaultUser.png" alt="Profile picture">'));
        postAuthor.append($('<p>' + post.author.username + '</p>'));

        const postHeader = $('<div class="userPostHeader"></div>');
        postHeader.append(postAuthor);

        // Post date
        postHeader.append($('<p>' + post.date + '</p>'));
        postDiv.append(postHeader);


        // Post picture
        const postContent = $('<div class="userPostContent"></div>');
        if (post.cover !== "")
            postContent.append($('<img src="' + post.cover + '" alt="Post picture">'));
        // Post text/body
        postContent.append($('<p>'+ post.body + '</p><button class="btn" type="button" name="like">👍</button>'));
        postDiv.append(postContent);

        mainFeed.append(postDiv);
    }
}

$(function() {
    $.getJSON("https://api.npoint.io/ff5e50d6586fda504c1b", function(response) {
        displayPosts(response);
    }).fail(function() {
        console.log("Failed to fetch posts!");
    })
});
