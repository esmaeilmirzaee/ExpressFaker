import faker from 'faker';

const name = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    middleName: faker.name.middleName(),
    findName: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    gender: faker.name.gender(),
    prefix: faker.name.prefix(),
    suffix: faker.name.suffix(),
    title: faker.name.title(),
    jobDescriptor: faker.name.jobDescriptor(),
    jobArea: faker.name.jobArea(),
    jobType: faker.name.jobType(),
};

export const getName = async (req, res) => {
    let respond = {};
    if (!req.query.q) {
        respond = { name };
    } else {
        req.query.q.split(',').map((q) => {
            switch (q.toLowerCase()) {
                case 'firstname':
                    respond = { ...respond, firstName: name.firstName };
                    break;
                case 'lastname':
                    respond = { ...respond, lastName: name.lastName };
                    break;
                case 'middlename':
                    respond = { ...respond, middleName: name.middleName };
                    break;
                case 'findname':
                    respond = { ...respond, findName: name.findName };
                    break;
                case 'jobtitle':
                    respond = { ...respond, jobTitle: name.jobTitle };
                    break;
                case 'gender':
                    respond = { ...respond, gender: name.gender };
                    break;
                case 'prefix':
                    respond = { ...respond, prefix: name.prefix };
                    break;
                case 'suffix':
                    respond = { ...respond, suffix: name.suffix };
                    break;
                case 'title':
                    respond = { ...respond, title: name.title };
                    break;
                case 'jobdescriptor':
                    respond = { ...respond, jobDescriptor: name.jobDescriptor };
                    break;
                case 'jobarea':
                    respond = { ...respond, jobArea: name.jobArea };
                    break;
                case 'jobtype':
                    respond = { ...respond, jobType: name.jobType };
                    break;
                default:
                    respond = { name };
            }
        });
    }
    if (Object.keys(respond).length != 0) {
        res.status(200).json({ respond });
    } else {
        res.status(403).json({ error });
    }
};
