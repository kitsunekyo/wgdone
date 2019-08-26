import mongoose from 'mongoose';

const db = {
  connect() {
    return mongoose.connect(process.env.MONGO);
  }
};

export default db;
