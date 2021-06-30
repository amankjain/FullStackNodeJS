import { promises as promisesfs } from 'fs';
import express from 'express';

import fs from 'fs';

const cacheFn = async (req: express.Request, res: express.Response, next: Function) => {
  const fileName: string = req.query.fileName as string;
  const width: number = parseInt(req.query.width as string);
  const height: number = parseInt(req.query.height as string);
  const outFile =
    process.cwd() + '\\assets\\thumb\\' + (fileName + '-' + width + '-' + height + '.jpg');
  if (fs.existsSync(outFile)) {
    const buffer: Buffer = await promisesfs.readFile(outFile);
    res.writeHead(200, { 'Content-type': 'image/jpg' });
    res.end(buffer);
  } else {
    next();
  }
};
export default cacheFn;
