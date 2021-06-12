const express = require('express')
const app = express();

app.use(express.json());

const database = {
  users: [
    {
      id: '123',
      name: 'Test',
      email: 'test@test.com',
      password: 'cookies',
      entries : 0,
      joined: new Date()
    },
    {
      id: '122',
      name: 'Sally',
      email: 'sal@test.com',
      password: 'banana',
      entries : 0,
      joined: new Date()
    }
  ],
};

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/signin', (req, res) => {
  if((req.body.email === database.users[0].email)
    && req.body.password === database.users[0].password
  ){
    res.json('Success')
  } else {
    res.status(400).json('Error Logging in')
  }
  // res.json('Signed in')
});
 
app.listen(3000, ()=> {
  console.log('App is litening to port 3000')
})