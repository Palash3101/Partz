const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3100;

app.use(cors());

app.get('/', (req, res) => {  
  // res.send("Hello World");
  res.json({ status: "OK 200" });
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
