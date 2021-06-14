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
  res.send(database.users)
})

//User signing in
app.post('/signin', (req, res) => {
  if((req.body.email === database.users[0].email)
    //&& req.body.password === database.users[0].password
  ){
    res.json('Success')
  } else {
    res.status(400).json('Error Logging in')
  }
  res.json('Signed in')
});

//register a new user
app.post('/register', (req, res)=> {
  const  {email, name, password} = req.body
  database.users.push({
    id: '125',
    name: name,
    email: email,
    password: password,
    entries : 0,
    joined: new Date()
  });
  res.json(database.users[database.users.length - 1])
});


//Profile => User id
app.get('/profile/:id', (req, res)=> {
  const { id } = req.params;
  let found = false;

  database.users.forEach(user => {
    if(user.id === id){
      found = true;
      return res.json(user)
    }
  })
  if(!found){
    res.status(400).json('NOT FOUND YO')
  }
});

app.listen(3000, ()=> {
  console.log('App is litening to port 3000')
})