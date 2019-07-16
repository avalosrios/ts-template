import logger from '@zenrez/logger';
import app from './app';

const server = app.listen(app.get('port'), () => {
    logger.info(
        '  App is running at http://localhost:%d in %s mode',
        app.get('port'),
        app.get('env'),
    );
    logger.info('  Press CTRL-C to stop\n');
});

export default server;
