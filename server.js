const express = require('express');
const app = express();
const port = process.env.PORT || 3030; // default port is 3000

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Hello World'
    });
});

app.listen(port,'0.0.0.0',() => {
    console.log(`Server running on port ${port}`);
});