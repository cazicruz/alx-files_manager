const { MongoClient } = require('mongodb');

class DBClient{
  constructor (){
    const host= process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || '27017';
    const database = process.env.DB_DATABASE || 'files_manager';
    const uri = `mongodb://${host}:${port}/${database}`;
    this.client = new MongoClient(this.uri);
  }
    this.client.connect();

  function isAlive(){
    return this.client.isConnected();

/**
 * returns true if client is connected
 */

  async nbUsers(){
  if (!this.isAlive){
    console.error('db not connected');
    return 0;
  };
  try {
    const db = this.client.db();
    const collection = db.collection('users');
    const count = await collection.countDocuments();
    return count;
  } catch (error) {
    console.error('Failed to retrieve the number of users:', error);
    return 0;}
  };

/**
 * returns the number of files in the dsatabase
 */

  async nbFiles(){
  if (!this.isAlive){
    console.error('db not connected');
    return 0;
  };
  try {
    const db = client.db();
    const collection = db.collection('files');
    const count = await collection.countDocuments();
    return count;
  } catch (error) {
    console.error('Failed to retrieve the number of users:', error);
    return 0;}
  };

/**
   * Retrieves a reference to the `users` collection
   * @returns {Promise<Collection>}
   */
  async usersCollection() {
    return this.client.db().collection('users');
  }

  /**
   * Retrieves a reference to the `files` collection
   * @returns {Promise<Collection>}
   */
  async filesCollection() {
    return this.client.db().collection('files');
  }
}

export const dbClient = new DBClient();
export default dbClient;
