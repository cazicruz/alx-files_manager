const { MongoClient } = require('mongodb');

class DBClient{
  constructor (){
    this.host= process.env.DB_HOST || 'localhost';
    this.port = process.env.DB_PORT || '27017';
    this.uri = `mongodb://${this.host}:${this.port}`;
    this.database = process.env.DB_DATABASE || 'files_manager';
    this.client = new MongoClient(this.uri);
  }

  function isAlive(){
    this.client.connect((error) => {
      if (error){
        return false;
      }
      return true;
    };
  });
  async nbUsers(){
  if (!this.isAlive){
    console.error('db not connected');
    return 0;
  };
  try {
    const db = this.client.db(database);
    const collection = db.collection('users');
    const count = await collection.countDocuments();
    return count;
  } catch (error) {
    console.error('Failed to retrieve the number of users:', error);
    return 0;}
  };

  async nbFiles(){
  if (!this.isAlive){
    console.error('db not connected');
    return 0;
  };
  try {
    const db = client.db(database);
    const collection = db.collection('files');
    const count = await collection.countDocuments();
    return count;
  } catch (error) {
    console.error('Failed to retrieve the number of users:', error);
    return 0;}
  };
}
const dbClient = new DBClient();
module.exports = dbClient;
