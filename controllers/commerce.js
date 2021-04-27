import faker from 'faker';

// color,department,productName,price,productAdjective,productMaterial,product, productDescription

const commerce = {
    color: faker.commerce.color(),
    department: faker.commerce.department(),
    productName: faker.commerce.productName(),
    price: faker.commerce.price(),
    productAdjective: faker.commerce.productAdjective(),
    productMaterial: faker.commerce.productMaterial(),
    product: faker.commerce.product(),
    productDescription: faker.commerce.productDescription(),
};

export const getCommerce = async (req, res) => {
    let respond = {};
    if (!req.query.q) {
        res.status(200).json({ commerce });
    } else {
        req.query.q.split(',').map((q) => {
            switch (q.toLowerCase()) {
                case 'color':
                    respond = { ...respond, color: commerce.color };
                    break;
                case 'department':
                    respond = { ...respond, department: commerce.department };
                    break;
                case 'productname':
                    respond = {
                        ...respond,
                        productName: commerce.productName,
                    };
                    break;
                case 'price':
                    respond = { ...respond, price: commerce.price };
                    break;
                case 'productadjective':
                    respond = {
                        ...respond,
                        productAdjective: commerce.productAdjective,
                    };
                    break;
                case 'productmaterial':
                    respond = {
                        ...respond,
                        productMaterial: commerce.productMaterial,
                    };
                    break;
                case 'product':
                    respond = { ...respond, product: commerce.product };
                    break;
                case 'productdescription':
                    respond = {
                        ...respond,
                        productDescription: commerce.productDescription,
                    };
                    break;
                default:
                    respond = { ...commerce };
            }
        });
    }
    if (Object.keys(respond).length != 0) {
        res.status(200).json({ commerce: respond });
    }
};
