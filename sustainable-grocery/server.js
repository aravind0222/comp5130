const express = require('express');
const app = express();

// Set up a basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Define the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
