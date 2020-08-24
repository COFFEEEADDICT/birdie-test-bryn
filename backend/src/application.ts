import * as express from "express";
import * as cors from 'cors';

import {eventsController, timelineController} from "./controllers/events";

const app = express();

app.use(cors())
app.use(eventsController);
app.use(timelineController);

//Get anything else - throw error
// app.get('*', (_, res) => {
//   res.status(404).send('Nothing here 🤔')
// })

export default app;
