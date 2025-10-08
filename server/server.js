const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
const contactRoutes = require('./routes/Contact');
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
