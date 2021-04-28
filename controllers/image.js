import faker from 'faker';

let results = faker.image;
let respond = {};
Object.entries(results).forEach(([key, value]) => {
    if (typeof value == 'function') {
        respond = { ...respond, [key]: value() };
    } else {
        let inner = {};
        let x = value;
        Object.entries(x).forEach(([k, v]) => {
            inner = { ...inner, [k]: v() };
        });
        respond = { ...respond, [key]: inner };
    }
});

const defaultImage = {
    image: faker.image.image(),
    avatar: faker.image.avatar(),
    imageUrl: faker.image.imageUrl(),
    abstract: faker.image.abstract(),
    animals: faker.image.animals(),
    business: faker.image.business(),
    cats: faker.image.cats(),
    city: faker.image.city(),
    food: faker.image.food(),
    nightlife: faker.image.nightlife(),
    fashion: faker.image.fashion(),
    people: faker.image.people(),
    nature: faker.image.nature(),
    sports: faker.image.sports(),
    technics: faker.image.technics(),
    transport: faker.image.transport(),
    dataUri: faker.image.dataUri(),
};

const lorempixelImage = (items) => {
    let respond = {};
    if (items) {
        items.map((q) => {
            switch (q.toLowerCase()) {
                case 'image':
                    respond = {
                        ...respond,
                        image: faker.image.lorempixel.image(),
                    };
                    break;
                case 'avatar':
                    respond = {
                        ...respond,
                        avatr: faker.image.lorempixel.avatar(),
                    };
                    break;
                case 'imageurl':
                    respond = {
                        ...respond,
                        imageUrl: faker.image.lorempixel.imageUrl(),
                    };
                    break;
                case 'abstract':
                    respond = {
                        ...respond,
                        abstract: faker.image.lorempixel.abstract(),
                    };
                    break;
                case 'animals':
                    respond = {
                        ...respond,
                        animals: faker.image.lorempixel.animals(),
                    };
                    break;
                case 'business':
                    respond = {
                        ...respond,
                        business: faker.image.lorempixel.business(),
                    };
                    break;
                case 'cats':
                    respond = {
                        ...respond,
                        cats: faker.image.lorempixel.cats(),
                    };
                    break;
                case 'city':
                    respond = {
                        ...respond,
                        city: faker.image.lorempixel.city(),
                    };
                    break;
                case 'food':
                    respond = {
                        ...respond,
                        food: faker.image.lorempixel.food(),
                    };
                    break;
                case 'nightlife':
                    respond = {
                        ...respond,
                        nightlife: faker.image.lorempixel.nightlife(),
                    };
                    break;
                case 'fashion':
                    respond = {
                        ...respond,
                        fashion: faker.image.lorempixel.fashion(),
                    };
                    break;
                case 'people':
                    respond = {
                        ...respond,
                        people: faker.image.lorempixel.people(),
                    };
                    break;
                case 'nature':
                    respond = {
                        ...respond,
                        nature: faker.image.lorempixel.nature(),
                    };
                    break;
                case 'sports':
                    respond = {
                        ...respond,
                        sports: faker.image.lorempixel.sports(),
                    };
                    break;
                case 'technics':
                    respond = {
                        ...respond,
                        technics: faker.image.lorempixel.technics(),
                    };
                    break;
                case 'transport':
                    respond = {
                        ...respond,
                        transport: faker.image.lorempixel.transport(),
                    };
                    break;
                default:
                    respond = { ...respond };
            }
        });
    }
};

const unsplashImage = {};

const lorempicsumImage = {};

const getTheRespond = (q = '', source = '') => {
    switch (source) {
        case 'lorempixel':
            return lorempixel;
            break;
        case 'lorempicsum':
            return lorempicsum;
            break;
        case 'unsplash':
            return unsplash;
            break;
        default:
            return defaultImage;
    }
};

export const getImage = async (req, res) => {
    console.log(req.query);

    let respond = {};
    if (Object.keys(req.query).length > 0) {
        // unsplash, lorempixel, lorempicsum
        console.log(Object.keys(req.query));
        let source = req.query.source;
        let q = req.query.source;

        respond = getTheRespond();

        req.query.q.split(',').map((q) => {
            switch (q.toLowerCase()) {
                case 'datauri':
                    respond = { ...respond, dataUri: image.dataUri };
                    break;
                case 'transport':
                    respond = { ...respond, transport: image.transport };
                    break;
                case 'technics':
                    respond = { ...respond, technics: image.technics };
                    break;
                case 'nature':
                    respond = { ...respond, nature: image.nature };
                    break;
                case 'sports':
                    respond = { ...respond, sports: image.sports };
                    break;
                case 'people':
                    respond = { ...respond, people: image.people };
                    break;
                case 'fashion':
                    respond = { ...respond, fashion: image.fashion };
                    break;
                case 'nightlife':
                    respond = { ...respond, nightlife: image.nightlife };
                    break;
                case 'food':
                    respond = { ...respond, food: image.food };
                    break;
                case 'city':
                    respond = { ...respond, city: image.city };
                    break;
                case 'image':
                    respond = { ...respond, image: image.image };
                    break;
                case 'avatar':
                    respond = { ...respond, avatar: image.avatar };
                    break;
                case 'imageurl':
                    respond = { ...respond, imageUrl: image.imageUrl };
                    break;
                case 'abstract':
                    respond = { ...respond, abstract: image.abstract };
                    break;
                case 'animals':
                    respond = { ...respond, animals: image.animals };
                    break;
                case 'business':
                    respond = { ...respond, business: image.business };
                    break;
                case 'cats':
                    respond = { ...respond, cats: image.cats };
                    break;
                default:
                    respond = { image };
            }
        });
    }

    if (Object.keys(respond).length != 0) {
        res.status(200).json({ ...respond });
    } else {
        res.status(406).json({ image, error: 'Something was wrong.' });
    }
};
