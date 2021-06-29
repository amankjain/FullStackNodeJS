import convertImage from '../src/imageProcessingModule';
import fs from 'fs';

describe('Test image resizing function', function () {
  beforeEach(function () {
    //delete the file if present already in thumb directory
    const outFile = process.cwd() + '\\assets\\thumb\\' + 'fjord_thumb.jpg';
    if (fs.existsSync(outFile)) {
      fs.unlinkSync(outFile);
    }
  });
  it('Image transform test - check if thumb file exists', async function () {
    await convertImage('fjord', 200, 200);
    const outFile = process.cwd() + '\\assets\\thumb\\' + 'fjord_thumb.jpg';
    expect(fs.existsSync(outFile)).toEqual(true);
  });
});
