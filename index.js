import Express from 'express';
import addressRoutes from './routes/address.js';
import commerceRoutes from './routes/commerce.js';
import animalRoutes from './routes/animal.js';
import loremRoutes from './routes/lorem.js';
import nameRoutes from './routes/name.js';
import imageRoutes from './routes/image.js';

import tweetsRoutes from './routes/tweets.js';
import userRoutes from './routes/user.js';

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
app.use('/api/lorem', loremRoutes);
app.use('/api/name', nameRoutes);
app.use('/api/image', imageRoutes);

app.use('/api/tweets', tweetsRoutes);
app.use('/api/user', userRoutes);
let port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
