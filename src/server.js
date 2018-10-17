var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

// GET /?pdf=uri
app.get('/', (req, res) => {
  if(req.query.pdf === '' || req.query.pdf == undefined) {
    res.status(400).send("Missing query parameter `pdf`");
  } else {
    res.status(200).send("ok");
  }
});

// POST /
app.post('/', (req, res) => {
  if(!req.is('application/pdf')) {
    res.status(415).send("Unsupported content-type: " + req.get('content-type'));
  } else {
    res.status(200).send("ok");
  }
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

