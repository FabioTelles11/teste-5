const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;


app.use('/frontend', express.static(path.join(__dirname, 'frontend')));


app.get('/', (req, res) => {
    res.redirect('/frontend/index.html');
});


app.use((req, res) => {
    res.status(404).send('Página não encontrada. <a href="/frontend/index.html">Voltar ao início</a>');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Access site at http://localhost:${PORT}/frontend/index.html`);
});
