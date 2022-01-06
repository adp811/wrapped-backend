const express = require('express');
const app = express();

const cors = require('cors');
require('dotenv').config();

const userDataRoutes = require('./routes/userDataRoutes');
const categorieRoutes = require('./routes/categorieRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/user', userDataRoutes);
app.use('/api/categories', categorieRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Successfully served on port: ${PORT}.`);
});
