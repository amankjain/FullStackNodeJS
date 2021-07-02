import express from 'express';
import convertRoute from './convertRoute';
import cacheFn from './cacheMiddleware';

const app = express();
const port = 3000;

app.listen(port);
/*
Configure end-point and cache middleware (cacheFn)
*/
app.use('/convert', cacheFn, convertRoute);
app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Home Page');
});
export default app;
