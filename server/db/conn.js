const { MongoClient } = require("mongodb");
const Db = `mongodb+srv://gugapoeta:Renatoquerido88!@cluster0.mkxwkvb.mongodb.net/`
// || process.env.API_URI ;

const client = new MongoClient(Db, {cd
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});
 
var _db;


module.exports = {
    connectToServer: async function (callback) {
  
      try {
        await client.connect();
      } catch (e) {
        console.error(e);
      }
  
      _db = client.db("foodBasket");

      return (_db === undefined ? false : true);
    },
    getDb: function () {
      return _db;
    },
  };