import Express from 'express';
import addressRoutes from './routes/address.js';
import commerceRoutes from './routes/commerce.js';
import animalRoutes from './routes/animal.js';

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        message: 'Please refer to the following list to get your desired data.',
    });
});

app.use('/api/address', addressRoutes);
app.use('/api/commerce', commerceRoutes);
app.use('/api/animal', animalRoutes);

app.listen('8000', () => {
    console.log('Listening on 8000');
});
