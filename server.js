const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

// Serve static files from 'frontend' directory
app.use('/frontend', express.static(path.join(__dirname, 'frontend')));

// Redirect root to index
app.get('/', (req, res) => {
    res.redirect('/frontend/index.html');
});

// Catch-all handler for 404
app.use((req, res) => {
    res.status(404).send('Página não encontrada. <a href="/frontend/index.html">Voltar ao início</a>');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Access site at http://localhost:${PORT}/frontend/index.html`);
});
