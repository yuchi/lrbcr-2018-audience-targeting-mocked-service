const express = require('express');

const app = express();

app.get('/balance/:user', async (req, res) => {
  const { user } = req.params;

  const balance = getBalance(user);

  console.log(`User '${user}' has a balance of ${balance} €`);

  res.status(200).end(String(balance));
});

function getBalance(user) {
  switch (user) {
    case 'test':
      return 143;
    case 'poor':
      return 40000;
    case 'rich':
      return 333000;
    default:
      return Math.round(30000 * Math.random());
  }
}

app.listen(80);
