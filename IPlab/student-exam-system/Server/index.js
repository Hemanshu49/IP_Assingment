// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const userData = req.body;
  console.log('Received user data:', userData);

  res.status(200).json({ message: 'Data received by the server' });
});

app.post('/register', (req, res) => {
    const userData = req.body;
    console.log('Received user data:', userData);
  
  
    res.status(200).json({ message: 'Data received by the server' });
  });

//   // Event LOOP
//   console.log('This is the message for express');
//   setTimeout(function() {
//      console.log('Hello World');
//   }, 100);
//   console.log('You will get the message after some time');

//   // CallBack
//   var content;
// function readingfile() {
//   var fs = require("fs");
//   content = fs.readFileSync("test.txt", "utf8");
//   return content;
// }
// readingfile();
// console.log(content);




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
