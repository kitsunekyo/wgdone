import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import RoomsRouter from './rooms/rooms.router';

import db from './mongodb/mongo';
import Room from './mongodb/room.model';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router = express.Router();
router.use('/rooms', RoomsRouter);
app.use('/api', router);

db.connect().then(async () => {
  MOCK();
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
  );
});

async function MOCK() {
  const room = await new Room({ name: 'Wohnzimmer' });
  const task = await room.tasks.push({ name: 'Staubsaugen' });
  await room.save();
}
