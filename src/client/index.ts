const express_client = require('express');
const app_client = express_client();
const port_client = 3666;

app_client.get('/', (req, res) => res.send('This is the client'));

app_client.listen(port_client, () => console.log(`Client running...`));