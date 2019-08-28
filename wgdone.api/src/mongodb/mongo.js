import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const db = {
  async connect() {
    const mongod = new MongoMemoryServer();
    const connectionString = await mongod.getConnectionString();
    return mongoose.connect(connectionString);
  }
};

export default db;
