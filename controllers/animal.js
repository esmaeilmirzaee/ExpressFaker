import faker from 'faker';

const animal = {
    dog: faker.animal.dog(),
    cat: faker.animal.cat(),
    snake: faker.animal.snake(),
    bear: faker.animal.bear(),
    lion: faker.animal.lion(),
    cetacean: faker.animal.cetacean(),
    horse: faker.animal.horse(),
    bird: faker.animal.bird(),
    cow: faker.animal.cow(),
    fish: faker.animal.fish(),
    crocodilia: faker.animal.crocodilia(),
    insect: faker.animal.insect(),
    rabbit: faker.animal.rabbit(),
    type: faker.animal.type(),
};

export const getAnimals = async (req, res) => {
    let respond = {};
    if (!req.query.q) {
        res.status(200).json({ animal });
    } else {
        req.query.q.split(',').map((q) => {
            switch (q.toLowerCase()) {
                case 'dog':
                    respond = { ...respond, dog: animal.dog };
                    break;
                case 'cat':
                    respond = { ...respond, cat: animal.cat };
                    break;
                case 'snake':
                    respond = { ...respond, snake: animal.snake };
                    break;
                case 'bear':
                    respond = { ...respond, bear: animal.bear };
                    break;
                case 'lion':
                    respond = { ...respond, lion: animal.lion };
                    break;
                case 'cetacean':
                    respond = { ...respond, cetacean: animal.cetacean };
                    break;
                case 'horse':
                    respond = { ...respond, horse: animal.horse };
                    break;
                case 'bird':
                    respond = { ...respond, bird: animal.bird };
                    break;
                case 'cow':
                    respond = { ...respond, cow: animal.cow };
                    break;
                case 'fish':
                    respond = { ...respond, fish: animal.fish };
                    break;
                case 'crocodilia':
                    respond = { ...respond, crocodilia: animal.crocodilia };
                    break;
                case 'insect':
                    respond = { ...respond, insect: animal.insect };
                    break;
                case 'rabbit':
                    respond = { ...respond, rabbit: animal.rabbit };
                    break;
                case 'type':
                    respond = { ...respond, type: animal.type };
                    break;
                default:
                    res.status(200).json({ animal });
            }
        });
    }

    if (Object.keys(respond).length != 0) {
        res.status(200).json({ animal: { ...respond } });
    }
};
