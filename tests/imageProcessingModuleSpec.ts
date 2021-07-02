import convertImage from '../src/imageProcessingModule';
import fs from 'fs';
import path from 'path';

describe('Test image resizing function', function () {
  const width = 200;
  const height = 200;
  const fileName = 'fjord';
  const outFile = path.resolve(
    __dirname,
    '..',
    '..',
    'assets',
    'thumb',
    fileName + '-' + width + '-' + height + '.jpg',
  );
  beforeEach(function () {
    //delete the file if present already in thumb directory
    if (fs.existsSync(outFile)) {
      fs.unlinkSync(outFile);
    }
  });
  it('Image transform test - verify if thumb file got generated', async function () {
    await convertImage(fileName, width, height);
    expect(fs.existsSync(outFile)).toEqual(true);
  });
});
