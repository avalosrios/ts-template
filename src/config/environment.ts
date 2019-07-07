import dotenv from 'dotenv';

const load = () => {
    let path;
    switch (process.env.NODE_ENV) {
        case 'test':
            path = `${__dirname}/../../.env.test`;
            break;
        case 'development':
            path = `${__dirname}/../../.env.development`;
            break;
        case 'staging':
        case 'production':
            path = `${__dirname}/../../.env`;
            break;
        default:
            path = `${__dirname}/../../.env.example`;
    }
    return dotenv.config({ path });
};

export default {
    load,
};
