import faker from 'faker';

const lorem = {
    word: faker.lorem.word(),
    words: faker.lorem.words(),
    sentence: faker.lorem.sentence(),
    slug: faker.lorem.slug(),
    sentences: faker.lorem.sentences(),
    paragraph: faker.lorem.paragraph(),
    paragraphs: faker.lorem.paragraphs(),
    text: faker.lorem.text(),
    lines: faker.lorem.lines(),
};

export const getLorem = async (req, res) => {
    let respond = {};
    if (!req.query.q) {
        respond = { lorem };
    } else {
        req.query.q.split(',').map((q) => {
            switch (q.toLowerCase()) {
                case 'word':
                    respond = { ...respond, word: lorem.word };
                    break;
                case 'words':
                    respond = { ...respond, words: lorem.words };
                    break;
                case 'sentence':
                    respond = { ...respond, sentence: lorem.sentence };
                    break;
                case 'slug':
                    respond = { ...respond, slug: lorem.slug };
                    break;
                case 'sentences':
                    respond = { ...respond, sentences: lorem.sentences };
                    break;
                case 'paragraph':
                    respond = { ...respond, paragraph: lorem.paragraph };
                    break;
                case 'paragraphs':
                    respond = {
                        ...respond,
                        paragraphs: lorem.paragraphs,
                    };
                    break;
                case 'text':
                    respond = { ...respond, text: lorem.text };
                    break;
                case 'lines':
                    respond = { ...respond, lines: lorem.lines };
                    break;
                default:
                    respond = lorem;
            }
        });
    }
    if (Object.keys(respond).length != 0) {
        res.status(200).json({ respond });
    } else {
        res.status(403).json({ error: 'Something was wrong.' });
    }
};
