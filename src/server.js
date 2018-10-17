var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

// GET /?pdf=uri
app.get('/', (req, res) => {
  res.status(200).send("ok");
});

// POST /
app.post('/', (req, res) => {
  res.status(200).send("ok");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

