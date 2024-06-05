const express = require('express');
const app = express();
const PORT = 3000;

// Set up routes
app.get('/', (req, res) => {
    res.send('Welcome to my blog!');
});

// Dynamic route for individual blog posts
app.get('/posts/:postId', (req, res) => {
    const postId = req.params.postId;
    res.send(`Viewing post ${postId}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
