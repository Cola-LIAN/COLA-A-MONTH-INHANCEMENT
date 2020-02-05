require('dotenv').config();
const { MongoClient } = require('mongodb');
const username = process.env.USER_NAME;
const password = process.env.PASSWORD;
// const uri = 'mongodb+srv://playerDB:playerDB@cluster0-o5vvm.azure.mongodb.net/test?retryWrites=true&w=majority';
const uri = `mongodb+srv://${username}:${password}@cluster0-o5vvm.azure.mongodb.net/test?retryWrites=true&w=majority`;

const mongndbQueryWithPromise = (queryMethod, queryInputArray) => new Promise(
  (resolve, reject) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    client.connect(async (error, connection) => {
      if (error) {
        reject(error);
      }else{
        let result = connection.db('music_respository').collection('musics')[queryMethod](...queryInputArray);
        if(queryInput==='find'){
          result = await result.toArray(); 
        }
        client.close();
        resolve(result);
      }
    });
  },
);

// state
// [{name:"kuailechongbai"},{$set:{favorite: }}]

module.exports = mongndbQueryWithPromise;