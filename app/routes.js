var express = require('express');
var router = express.Router();
var chung = require('./models/chung.js');
router.get("/location", function(req, res)
{
  var query = chung.find({});
  query.exec(function(err, docs)
  {
    if(err)
    {
      throw err;
    }
    else
    {
      res.json(data);
    }
  });
});

module.exports = router;
