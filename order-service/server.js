const express = require('express');
const axios = require('axios'); // For making HTTP requests
const app = express();
const port = 3001;

// Endpoint to create an order
app.get('/api/order', async (req, res) => {
    try {
        // Fetch user details from User Service (running on VM1)
        const userResponse = await axios.get('http://192.168.56.4:3000/api/user'); // Replace with VM1's IP address
        const user = userResponse.data;

        // Create a minimal order with user details
        const order = {
            orderId: 101,
            user: user,
            product: { name: 'Sample Product', price: 100 },
            status: 'created'
        };

        res.json(order);
    } catch (error) {
        console.error('Error communicating with User Service:', error.message);
        res.status(500).json({ message: 'Failed to create order' });
    }
});

app.listen(port, () => {
    console.log(`Order Service running at http://localhost:${port}`);
});

