import faker from 'faker';

const respondAddr = {
    zipCode: faker.address.zipCode(),
    zipCodeByState: faker.address.zipCodeByState(),
    city: faker.address.city(),
    cityPrefix: faker.address.cityPrefix(),
    citySuffix: faker.address.citySuffix(),
    cityName: faker.address.cityName(),
    streetName: faker.address.streetName(),
    streetAddress: faker.address.streetAddress(),
    streetSuffix: faker.address.streetSuffix(),
    streetPrefix: faker.address.streetPrefix(),
    secondaryAddress: faker.address.secondaryAddress(),
    county: faker.address.county(),
    country: faker.address.country(),
    countryCode: faker.address.countryCode(),
    state: faker.address.state(),
    stateAbbr: faker.address.stateAbbr(),
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
    cardinalDirection: faker.address.cardinalDirection(),
    ordinalDirection: faker.address.ordinalDirection(),
    nearbyGPSCoordinate: faker.address.nearbyGPSCoordinate(),
    timeZone: faker.address.timeZone(),
};

export const address = async (req, res) => {
    let respond = {};

    // console.log(req.query.q);

    if (!req.query.q) {
        respond = { ...respondAddr };
    } else {
        req.query.q.split(',').map((q) => {
            switch (q.toLowerCase()) {
                case 'zipcode':
                    respond = { ...respond, zipCode: faker.address.zipCode() };
                    break;
                case 'zipcodebystate':
                    respond = {
                        ...respond,
                        zipCodeByState: faker.address.zipCodeByState(),
                    };
                    break;
                case 'city':
                    respond = { ...respond, city: faker.address.city() };
                    break;
                case 'cityprefix':
                    respond = {
                        ...respond,
                        cityPrefix: faker.address.cityPrefix(),
                    };
                    break;
                case 'citysuffix':
                    respond = {
                        ...respond,
                        citySuffix: faker.address.citySuffix(),
                    };
                    break;
                case 'cityname':
                    respond = {
                        ...respond,
                        cityName: faker.address.cityName(),
                    };
                    break;
                case 'streetname':
                    respond = {
                        ...respond,
                        streetName: faker.address.streetName(),
                    };
                    break;
                case 'streetaddress':
                    respond = {
                        ...respond,
                        streetAddress: faker.address.streetAddress(),
                    };
                    break;
                case 'streetsuffix':
                    respond = {
                        ...respond,
                        streetSuffix: faker.address.streetSuffix(),
                    };
                    break;
                case 'streetprefix':
                    respond = {
                        ...respond,
                        streetPrefix: faker.address.streetPrefix(),
                    };
                    break;
                case 'secondaryaddress':
                    respond = {
                        ...respond,
                        secondaryAddress: faker.address.secondaryAddress(),
                    };
                    break;
                case 'county':
                    respond = { ...respond, county: faker.address.county() };
                    break;
                case 'country':
                    respond = { ...respond, country: faker.address.country() };
                    break;
                case 'countrycode':
                    respond = {
                        ...respond,
                        countryCode: faker.address.countryCode(),
                    };
                    break;
                case 'state':
                    respond = {
                        ...respond,
                        state: faker.address.state(),
                    };
                    break;
                case 'stateabbr':
                    respond = {
                        ...respond,
                        stateAbbr: faker.address.stateAbbr(),
                    };
                    break;
                case 'latitude':
                    respond = {
                        ...respond,
                        latitude: faker.address.latitude(),
                    };
                    break;
                case 'longitude':
                    respond = {
                        ...longitude,
                        longitude: faker.address.longitude(),
                    };
                    break;
                case 'direction':
                    respond = {
                        ...respond,
                        direction: faker.address.direction(),
                    };
                    break;
                case 'cardinaldirection':
                    respond = {
                        ...respond,
                        cardinalDirection: faker.address.cardinalDirection(),
                    };
                    break;
                case 'ordinaldirection':
                    respond = {
                        ...respond,
                        ordinalDirection: faker.address.ordinalDirection(),
                    };
                    break;
                case 'nearbyGPSCoordinate':
                    respond = {
                        ...respond,
                        nearbyGPSCoordinate: faker.address.nearbyGPSCoordinate(),
                    };
                    break;
                case 'timezone':
                    respond = {
                        ...respond,
                        timeZone: faker.address.timeZone(),
                    };
                    break;
                default:
                    respond = { ...respondAddr };
            }
        });
    }
    if (Object.keys(respond).length != 0) {
        res.status(200).json({ address: respond });
    }
};
