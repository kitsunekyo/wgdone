const { MongoClient } = require('mongodb');

let database = null;

async function startDatabase() {
  const mongoDBURL = `mongodb://wgdone:IDHGjgM1xipM9wxAvE1mwV6ilkXIVQBVDvQAhPN01tJUClX85Yw4p5jRiUfwpsGELUp0C5GJgmtgcIJk7uBKKQ%3D%3D@wgdone.documents.azure.com:10255/?ssl=true`;
  const connection = await MongoClient.connect(mongoDBURL);
  database = connection.db();
}

async function getDatabase() {
  if (!database) await startDatabase();
  return database;
}

module.exports = {
  getDatabase,
  startDatabase
};
