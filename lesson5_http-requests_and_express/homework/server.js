const express = require('express');
const app = express();

let names = ['Nick', 'John', 'Jane', 'Mary', 'Tom'];
//             0       1        2       3      4

// app.get('/some_request', (req, res) => {});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});