import convertImage from '../src/imageProcessingModule';
import fs from 'fs';

describe("Test image resizing function",function() {
    beforeEach(function() {
      //delete the file if present already in thumb directory
      const outFile = process.cwd() + '\\assets\\thumb\\' + 'fjord_thumb.jpg';
      if (fs.existsSync(outFile))           {
            fs.rmSync(outFile);
        }
    });  
    it("Resize image", function() {
      
    });
}