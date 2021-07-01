import sharp from 'sharp';
import { promises as promisesfs } from 'fs';

/*
Actual function that uses the sharp library to resize the image.
Returns a promise that contains the image buffer
Waits for the file to be written to disk before leaving the function
*/
const convertImage = async function (
  fileName: string,
  width: number,
  height: number,
): Promise<Buffer> {
  const inputFile = process.cwd() + '\\assets\\source\\' + fileName + '.jpg';
  const outputBuffer = await sharp(inputFile)
    .resize(width, height, {
      fit: sharp.fit.inside,
      withoutEnlargement: true,
    })
    .toFormat('jpeg')
    .toBuffer();
  const outFile =
    process.cwd() + '\\assets\\thumb\\' + (fileName + '-' + width + '-' + height + '.jpg');
  await promisesfs.writeFile(outFile, outputBuffer);
  return outputBuffer;
};

export default convertImage;
