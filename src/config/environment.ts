import dotenv from 'dotenv';
import fs from 'fs';

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
      break;
    default:
      if (fs.existsSync(`${__dirname}/../../.env`)) {
        // eslint-disable-next-line no-console
        console.log('Using .env file to supply config environment variables');
        path = `${__dirname}/../../.env`;
      } else {
        path = `${__dirname}/../../.env.example`;
      }
      break;
  }
  return dotenv.config({ path });
};

export default {
  load,
};
