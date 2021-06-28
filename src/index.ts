import express from 'express';
import convertRoute from './convertRoute';
import cacheFn from './cacheMiddleware';

const app = express();
const port = 3000;

app.listen(port);
app.use('/convert', cacheFn, convertRoute);
app.get('/', (req, res) => {
  res.send('Home Page');
});
export default app;
