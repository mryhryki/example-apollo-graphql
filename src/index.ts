import express from "express";

const PORT = 57436

export const app = express();

app.get('/', (req, res) => res.send('<h1>Hello, Apollo!</h1>'))

app.listen(PORT, () => console.debug(`=== http://localhost:${PORT} ===`));
