import * as express from "express";
import * as mysql from "mysql";
import console = require("console");


export const eventsController = express.Router();

const connection = mysql.createConnection({
  host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
  port: 3306,
  user: 'test-read',
  password: 'xnxPp6QfZbCYkY8',
  database: 'birdietest',
})
 
connection.connect((err: any) =>{
  if (err) throw err;
    console.log('** DB connected **');
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


// const removeKeys = (array: any) => {

   

//   for (var key in array) {
//     if (array.hasOwnProperty(key)) {
//         for (var _key in array[key].cards)
//           {delete array[key].cards[_key].priority}
//     }
//   }
//   return array  
// }

// care_recipient_id

// 1. //
eventsController.get('/recevingcare', (_,res) => { 
  connection.query('SELECT distinct care_recipient_id FROM events', async (err, results) => {
   if (err) {
     return res.send(err)
   } else { 
    //Format for the front end
    const receving_care_list = await results.map((each: any) => each.care_recipient_id)
    return res.status(200).send(receving_care_list);
   }
  })
});


 

// eventsController.get('/events', (_,res) => { 
//    connection.query('SELECT * FROM events LIMIT 0, 2', (err, results) => {
//     if (err) {
//       return res.send(err)
//     } else {
//     return res.status(200).json({
//        results
//       });
//     }
//    })
// });

//   "df50cac5-293c-490d-a06c-ee26796f850d",
//   "e3e2bff8-d318-4760-beea-841a75f00227",
//   "ad3512a6-91b1-4d7d-a005-6f8764dd0111"

//return caregiver_id

