import faker from 'faker';

export class User {
    getUser() {
        return {
            name:
                faker.name.firstName() +
                ' ' +
                faker.name.middleName().toUpperCase() +
                '. ' +
                faker.name.lastName(),
            email: faker.internet.exampleEmail(),
            bod: faker.date.past(),
            address: faker.address.streetAddress(),
            zipCode: faker.address.zipCode(),
            phone: faker.phone.phoneNumber(),
            password: faker.internet.password(),
            active: faker.datatype.boolean(),
            locked: faker.datatype.boolean(),
            avatar: 'https://source.unsplash.com/collection/1340430/1600x900',
            userName: faker.internet.userName(),
        };
    }
}

export const getUser = async (req, res) => {
    let user = new User();
    res.status(200).json({ user: user.getUser() });

    // let name =
    //     faker.name.firstName() +
    //     ' ' +
    //     faker.name.middleName() +
    //     ' ' +
    //     faker.name.lastName();
    // let email = faker.internet.exampleEmail();
    // let bod = faker.date.past();
    // let address = faker.address.streetAddress();
    // let zipCode = faker.address.zipCode();
    // let phone = faker.phone.phoneNumber();
    // let password = faker.internet.password();
    // let active = faker.datatype.boolean();
    // let locked = faker.datatype.boolean();
    // let avatar = 'https://source.unsplash.com/collection/1340430/1600x900';
    // let userName = faker.internet.userName();
    // res.json({
    //     user: {
    //         name,
    //         email,
    //         bod,
    //         address,
    //         zipCode,
    //         phone,
    //         password,
    //         active,
    //         locked,
    //         avatar,
    //         userName,
    //     },
    // });
};
