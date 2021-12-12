const express = require('express');
const pool = require('./database');

const app = express();

// Ejs view engine
app.set('view engine', 'ejs');

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Static files directory
app.use(express.static('public'));

// Listen on default port
app.listen(80);

app.get('/', (req, res) => {
    res.redirect('/posts');
});

app.get('/posts', async (req, res) => {
    try {
        const posts = await pool.query(
            "SELECT *, to_char(date, 'DD Mon YYYY') as date FROM posts"
        );
        res.render('posts', {
            posts: posts.rows,
            title: "Posts"
        });
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/posts/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const posts = await pool.query(
            "SELECT *, to_char(date, 'DD Mon YYYY') as date FROM posts WHERE id = $1", [id]
        );
        res.render('singlepost', {
            post: posts.rows[0],
            title: "Post"
        });
    } catch (err) {
        console.error(err.message);
    }
});

app.put('/posts/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const updatepost = await pool.query(
            "UPDATE posts SET likes = likes + 1 WHERE id = $1", [id]
        );
    } catch (err) {
        console.error(err.message);
    }
});

app.delete('/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const post = req.body;
        const deletepost = await pool.query(
            "DELETE FROM posts WHERE id = $1", [id]
        );
    } catch (err) {
        console.error(err.message);
    }
});

app.post('/posts', async (req, res) => {
    try {
        const post = req.body;
        post.date = new Date().toISOString().slice(0, 10);

        // default
        post.authorUsername = "John Doe";
        post.authorProfilePicture = "";

        const newpost = await pool.query(
            'INSERT INTO posts(title, body, "authorUsername", "authorProfilePicture", date, cover) values ($1, $2, $3, $4, $5, $6) RETURNING*', 
            [post.title, post.body, post.authorUsername, post.authorProfilePicture, post.date, post.cover]
        );
        res.redirect('posts');
    } catch (err) {
        console.error(err.message)
    }
});

app.get('/addnew', (req, res) => {
    res.render('addnewpost', {
        title: "New post"
    });
});

app.use((req, res) => {
    res.status(404).render('404', {
        title: "404"
    });
});