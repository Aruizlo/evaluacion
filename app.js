const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/'), (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
};

app.get('/about'), (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
};


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});