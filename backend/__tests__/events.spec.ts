import app from '../src/application'
import * as request from 'supertest';
import "jest";


const patients: string[] = [
  "df50cac5-293c-490d-a06c-ee26796f850d",
  "e3e2bff8-d318-4760-beea-841a75f00227",
  "ad3512a6-91b1-4d7d-a005-6f8764dd0111"
]

//test amount of expected care recivers / patients 
describe('Test the first section of the API - /receving_care for UI to select and equal the 3 patients', () => {
  it('Receives 3 patients', async () => {
    await request(app)
      .get('/recevingcare')
      .expect(200)
      .expect(function(res) {
        expect(res.body).toHaveLength(3)
        expect(res.body).toEqual(patients)
      });
  })
});