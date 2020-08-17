import app from '../src/application'
import * as request from 'supertest';

//test against amount of expected care recivers / patients 
describe('Test the first section of the API - /receving_care for UI to select 3 patients', () => {
  it('Receives 3 patients', async () => {
    await request(app)
      .get('/receving_care')
      .expect(200)
      .expect(function(res) {
        expect(res.body).toHaveLength(3);
      });
  })
});
