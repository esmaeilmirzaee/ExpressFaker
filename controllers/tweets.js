import faker from 'faker';

import { User } from './user.js';

export const getTweets = async (req, res) => {
    let tweet = new Tweet();
    res.json({ tweet: tweet.getTweet() });
};

const image = () => {
    let items = [];
    if (faker.datatype.boolean) {
        items.push(faker.image.nature());
        items.push(faker.image.city());
        items.push(faker.image.nature());
        items.push(faker.image.people());
        return items;
    }
    return faker.image.city();
};

class Tweet {
    tweet = {
        id: faker.datatype.uuid(),
        text: faker.lorem.paragraph(),
        images: image(),
        user: '',
        date: faker.datatype.boolean()
            ? faker.date.recent()
            : faker.date.past(),
        retweets: parseInt(faker.mersenne.rand() / 28),
        comments: parseInt(
            faker.mersenne.rand() / 25 + faker.mersenne.rand() / 200,
        ),
        like: parseInt(faker.mersenne.rand() / 10),
    };

    getTweet() {
        let user = new User();
        return { ...this.tweet, user: user.getUser() };
    }
}
