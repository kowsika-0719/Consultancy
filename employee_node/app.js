const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const { connectedToMongoDB } = require("./configuration/dbConfig");
const userRoutes = require("./routes/userRoute");
const app = express();
const port = process.env.port || 5000;

// const path = require('path');

// remove this(connectedToMongoDB) as we don't need to call this method from app.js
// connectedToMongoDB().then(() => {
//   app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
//   });
// }) 

app.use(bodyParser.json());
app.use(cors());

// app.use(express.static(path.join(__dirname, 'build')));

app.use("/api/user",userRoutes);

// app.get('/', (req, res) => {
//   res.sendFile(path.json(__dirname, 'build', 'index.html'));
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
