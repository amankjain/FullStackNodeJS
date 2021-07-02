import sharp from 'sharp';
import { promises as promisesfs } from 'fs';
import path from 'path';

/*
Actual function that uses the sharp library to resize the image.
Returns a promise that contains the image buffer
Waits for the file to be written to disk before leaving the function
process.cwd vs path.resolve
https://www.geeksforgeeks.org/difference-between-process-cwd-and-__dirname-in-node-js/
*/
const convertImage = async function (
  fileName: string,
  width: number,
  height: number,
): Promise<Buffer> {
  console.log('Dir:' + __dirname);
  const inputFile = path.resolve(__dirname, '..', '..', 'assets', 'source', fileName + '.jpg');
  console.log('I File \n' + inputFile);
  const outputBuffer = await sharp(inputFile)
    .resize(width, height, {
      fit: sharp.fit.inside,
      withoutEnlargement: true,
    })
    .toFormat('jpeg')
    .toBuffer();
  const outFile = path.resolve(
    __dirname,
    '..',
    '..',
    'assets',
    'thumb',
    fileName + '-' + width + '-' + height + '.jpg',
  );
  console.log('Dir:' + __dirname);
  console.log('O File \n' + outFile);
  await promisesfs.writeFile(outFile, outputBuffer);
  return outputBuffer;
};

export default convertImage;
