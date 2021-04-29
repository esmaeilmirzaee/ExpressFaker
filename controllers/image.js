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
            console.log(
                Object.keys(respond).includes(req.query.source),
                respond,
            );
            respond = { ['unspecified']: respond['unspecified'] };
        }
    }
    if (Object.keys(respond) != 0) {
        res.status(200).json({ image: respond });
    } else {
        res.status(406).json({ image: respond, error: 'Something was wrong.' });
    }
};
