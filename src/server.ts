import 'reflect-metadata';
import express, { Application } from 'express';

import { AppDataSource } from './data-source';

import generalRoutes from './routes/general.route';
import typesRoutes from './routes/types.route';
import ormRoutes from './routes/orm.route';

const app: Application = express();

// -----------middleware for an Express.js-----------
// parses incoming requests with JSON payloads
app.use(express.json());
// parses incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));
// -----------middleware for an Express.js-----------

// --------routes---------
app.use('/', generalRoutes);
app.use('/types', typesRoutes);
app.use('/orm', ormRoutes);
// --------routes---------

AppDataSource.initialize()
  .then(async () => {
    console.log('Database connected');
    app.listen(5000, () => console.log('server running on port 5000'));
  })
  .catch((err) => console.log(err));