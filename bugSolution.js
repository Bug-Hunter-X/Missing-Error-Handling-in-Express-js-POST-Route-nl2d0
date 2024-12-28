const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Validate user data
  if (!user || !user.name || !user.email) {
    return res.status(400).send('Missing required user data');
  }
  db.createUser(user, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Failed to create user');
    } else {
      res.status(201).json(result);
    }
  });
});