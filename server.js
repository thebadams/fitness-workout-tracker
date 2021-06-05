const express = require('express');
const routes = require('./controllers');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(routes);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});