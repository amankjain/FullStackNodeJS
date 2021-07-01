import request from 'supertest';
import app from '../src/index';
import fs from 'fs';
//==================== user API test ====================

/**
 * Testing get all user endpoint
 */
describe('Test resize endpoint', function () {
  const width = 200;
  const height = 200;
  const fileName = 'fjord';
  const outFile =
    process.cwd() + '\\assets\\thumb\\' + (fileName + '-' + width + '-' + height + '.jpg');

  beforeEach(function () {
    //delete the file if present already in thumb directory
    if (fs.existsSync(outFile)) {
      fs.unlinkSync(outFile);
    }
  });
  it('endpoint responds with 200 OK and resized image content', function (done) {
    request(app).get(`/convert?fileName=fjord&width=${width}&height=${height}`).expect(200, done);
  });
});
