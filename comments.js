// Create web server
// Importing the Express module
const express = require('express');

// Creating an instance of an Express application
const app = express();

// Setting the port number
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Example endpoint: Get comments
app.get('/comments', (req, res) => {
    res.json([
        { id: 1, text: 'This is the first comment' },
        { id: 2, text: 'This is the second comment' }
    ]);
});

// Example endpoint: Post a new comment
app.post('/comments', (req, res) => {
    const newComment = req.body;
    res.status(201).json(newComment);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
