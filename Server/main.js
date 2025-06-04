const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const router = require('./routes/route.js');
const imagesRouter = require('./routes/images');
const multer = require('multer');

// Configuração do armazenamento
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use(router);
app.use(imagesRouter);
app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
