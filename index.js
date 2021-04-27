import Express from 'express';
import { words } from './data/words.js';
const app = Express();

app.get('/', (req, res) => {
    res.json(words);
});

app.get('/products/:id', (req, res) => {
    if (words.length < req.params.id) {
        res.status(404).json({ message: 'Invalid product.' });
    }

    res.status(200).json(words[req.params.id - 1]);
});

app.listen('3000', () => {
    console.log('Listening on 3000');
});
