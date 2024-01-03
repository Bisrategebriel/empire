const express = require('express');
const cors = require('cors')
const app = express();

const users = require('./users.json')

app.use(cors());

app.use('/login', (req, res) => {
  console.log(users.Users.find(user => {
      console.log(req)
        // return (user.username == req.body.username && user.password == req.body.password)
    }))
  res.send({
    token: 'test123'
  });
});

app.listen(3030, () => console.log('API is running on http://localhost:3030/login'));