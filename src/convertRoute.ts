import express from 'express';
import convertImage from './imageProcessingModule';
const convertRoute = express.Router();

convertRoute.get('/', async (req, res) => {
  const fileName: string = req.query.fileName as string;
  const width: number = parseInt(req.query.width as string);
  const height: number = parseInt(req.query.height as string);
  try {
    const returnValue = await convertImage(fileName, width, height);
    res.writeHead(200, { 'Content-type': 'image/jpg' });
    res.end(returnValue);
  } catch (error: unknown) {
    res.status(500);
    res.setHeader('Content-type', 'text/html');
    res.send(`<html><head></head><body><p>Convert API failed  ${error}</p></body></html>`);
  }
});

export default convertRoute;
