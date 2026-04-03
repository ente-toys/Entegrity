const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname));
// SPA catch-all: any path serves index.html (for /rowId routes)
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Game running at http://localhost:${PORT}`));
