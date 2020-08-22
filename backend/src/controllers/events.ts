import * as express from "express";
import * as mysql from "mysql";
import console = require("console");

export const eventsController = express.Router();
export const datesController = express.Router();

const connection = mysql.createConnection({
  host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
  port: 3306,
  user: 'test-read',
  password: 'xnxPp6QfZbCYkY8',
  database: 'birdietest',
})
 
connection.connect((err: any) =>{
  if (err) throw err;  
    console.log('*************************************************');
    console.log('**                DB connected                 **');
    console.log('*************************************************');
});

// type eventType = {
//   id: number,
//   title: string,
//   priority: number,
//   Icon: string,
//   Icon_color: string,
//   Icon_background_color: string,
//   Deeplink: string | unknown, 
//   Description: string
// }

type Patient = {
  care_recipient_id: string
}
  
// 1. //
eventsController.get('/recevingcare', (_,res) => { 
  connection.query('SELECT distinct care_recipient_id FROM events', async (err, results) => {
   if (err) {
     return res.send(err)
   } else {
    const receving_care_list = await results.map((patient: Patient) => patient.care_recipient_id)
    return res.status(200).send(receving_care_list);
   }
  })
});

// eventsController.get('/recevingcare/:pateintId/:date', (_,res) => { 
//   connection.query('SELECT pateintId FROM events', async (err, results) => {
//    if (err) {
//      return res.send(err)
//    } else {
//     const receving_care_list = await results.map((patient: Patient) => patient.care_recipient_id)
//     return res.status(200).send(receving_care_list);
//    }
//   })
// });

 
  
datesController.get("/recevingcare/:pateintId/:dates", (req, res) => {
      connection.query(`SELECT * FROM events WHERE care_recipient_id = '${req.params.pateintId}' AND (timestamp between '${req.params.dates}T00:00:00.000Z' and '${req.params.dates}T23:59:59.000Z') ORDER BY timestamp;`, async (err, results) => {
        if (err) {
          return res.send(err)
        } else {
        console.log("yesss", results.length)
        // const receving_care_list = await results.map((patient: Patient) => patient.care_recipient_id)
        return res.status(200).send(results);
        } 
      })
});
// SELECT * FROM birdietest.events WHERE care_recipient_id = 'df50cac5-293c-490d-a06c-ee26796f850d' AND timestamp >= "2019-05-01T07:25:29.928Z" <= "2019-06-01T07:25:29.928Z"
//AND WHERE timestamp > '2019-04-26T00:00:20.000Z' ;
// SELECT * FROM birdietest.events where care_recipient_id = 'df50cac5-293c-490d-a06c-ee26796f850d' AND (timestamp between '2019-05-01T00:00:00.000Z' and '2019-05-02T00:00:00.000Z');
//df50cac5-293c-490d-a06c-ee26796f850d