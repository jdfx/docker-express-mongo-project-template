const express_server = require('express');
const app_server = express_server();
const port_server = 3666;

app_server.get('/', (req, res) => res.send('This is the server'));

app_server.listen(port_server, () => console.log(`Server running...`));