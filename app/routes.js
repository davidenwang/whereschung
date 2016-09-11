var express = require('express');
var router = express.Router();
var chung = require('./models/chung.js');

router.get("/location", function(req, res)
{
  var query = chung.find({}).sort({'createdAt': -1}).limit(1);
  query.exec(function(err, docs)
  {
    if(err)
    {
      throw err;
    }
    else
    {
      console.log("data retrieval");
      res.json(docs);
    }
  });
});

router.post("/newentry", function(req, res)
{
  console.log("new entry");
  console.log(req.body.location);
  var newEntry = new chung(
  {
    location: req.body.location,
    upvotes: 0,
    downvotes: 0,
    createdAt: new Date()
  });
  newEntry.save(function(err, entry)
  {
    if(err)
    {
      throw err;
    }
    console.log("saved");
  });
});

module.exports = router;
