import * as express from "express";
import * as mysql from "mysql";


export const pingController = express.Router();

const connection = mysql.createConnection({
  host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
  user: 'test-read',
  password: 'xnxPp6QfZbCYkY8',
  database: 'birdietest',
  port: 3306
})
 // table: 'events'
 
connection.connect()


pingController.get('/events', (_, res) => {
  res.status(200).json({
    greetings: 'Thank you for spending some time on this test. All the best 🙌'
  });
});


//return caregiver_id