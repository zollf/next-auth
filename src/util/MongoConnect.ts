import { MongoClient } from 'mongodb';

const { MONGODB_URI, MONGODB_DB } = process.env;

if (!MONGODB_URI) throw new Error('Please define the MONGODB_URI environment variable inside .env');
if (!MONGODB_DB) throw new Error('Please define the MONGODB_DB environment variable inside .env');

const mongoConnect = async () => {
  const client = new MongoClient(MONGODB_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  if (!client.isConnected()) await client.connect();

  return client.db(MONGODB_DB);
};

export default mongoConnect;
