const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(bodyParser.urlencoded({extended : false}));

app.use(adminRouter);
app.use(shopRouter);

const PORT = 2300;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
