const express = require('express');
const app = express();
const port = 3000;

// Hardcoded user data
const user = { id: 1, name: 'John Doe', email: 'john@example.com' };

// Endpoint to get user details
app.get('/api/user', (req, res) => {
    res.json(user);
});

app.listen(port, () => {
    console.log(`User Service running at http://localhost:${port}`);
});

