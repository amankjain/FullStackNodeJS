import request from 'supertest';
import app from '../src/index';
import fs from 'fs';
//==================== user API test ====================

/**
 * Testing get all user endpoint
 */
describe('Test resize endpoint -success case', function () {
  beforeEach(function () {
    //delete the file if present already in thumb directory
    const outFile = process.cwd() + '\\assets\\thumb\\' + 'fjord_thumb.jpg';
    if (fs.existsSync(outFile)) {
      fs.unlinkSync(outFile);
    }
  });
  it('endpoint responds with resized image content', function (done) {
    request(app).get('/convert?fileName=fjord&width=200&height=200').expect(200, done);
  });
});
