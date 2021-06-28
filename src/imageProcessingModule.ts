import sharp from 'sharp';
import { promises as promisesfs } from 'fs';

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
  const outFile = process.cwd() + '\\assets\\thumb\\' + (fileName + '_thumb.jpg');
  await promisesfs.writeFile(outFile, outputBuffer);
  return outputBuffer;
};

export default convertImage;
