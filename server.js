'use strict';

import express from 'express';
import path from 'path';
import routes from './lib/routes';

const app = express();
app.use(express.static(path.join(__dirname, 'public/build/')));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')));

// Routes defined
routes(app);

// handle the error safely
process.on('uncaughtException', function (err) {
  logger.error('Uncaught Error', {}, err, 'crit');
});

export default app;
