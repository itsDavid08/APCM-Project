const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/route.js');

app.use(router);

app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
