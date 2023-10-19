const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const  connect =  require('../config/dataBase');
const categoryRoutes = require('../routes/categoryRoutes');
const productRoutes = require('../routes/productRoutes');

require('dotenv').config();

const app = express();

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(cors());

app.use('/api', categoryRoutes);
app.use('/api', productRoutes);


// ... Add other routes for updating and deleting categories if needed

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connect()
});

module.exports = router;
