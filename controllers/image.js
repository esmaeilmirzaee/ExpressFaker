import faker from 'faker';

let respond = {};
let image = {};
function generateRespond() {
    Object.entries(faker.image).forEach(([key, value]) => {
        if (typeof value == 'function') {
            image = { ...image, [key]: value() };
        } else {
            let inner = {};
            let x = value;
            Object.entries(x).forEach(([k, v]) => {
                inner = { ...inner, [k]: v() };
            });
            respond = { ...respond, [key]: inner };
        }
    });
    respond = { ...respond, unspecified: image };
}

export const getImage = async (req, res) => {
    generateRespond();
    if (Object.keys(req.query).length > 0) {
        if (
            req.query.source &&
            Object.keys(respond).includes(req.query.source)
        ) {
            respond = { [req.query.source]: respond[req.query.source] };
        } else {
            respond = { ['unspecified']: respond['unspecified'] };
        }
    } else {
        respond = { ['unspecified']: respond['unspecified'] };
    }

    if (req.query.q) {
        let items = [];
        req.query.q.split(',').map((item) => {
            items.push(item);
        });
        let tempRespond = {};
        let sourceName = '';
        Object.entries(respond).forEach(([key, value]) => {
            sourceName = key;
            Object.entries(value).forEach(([k, v]) => {
                if (items.includes(k)) {
                    tempRespond = { ...tempRespond, [k]: v };
                }
            });
        });
        if (Object.keys(tempRespond).length != 0) {
            respond = { [sourceName]: tempRespond };
        }
        console.log(items, tempRespond);
    }

    if (Object.keys(respond) != 0) {
        res.status(200).json({ image: respond });
    } else {
        res.status(406).json({ image: respond, error: 'Something was wrong.' });
    }
};
