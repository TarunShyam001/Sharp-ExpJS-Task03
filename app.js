//switching the html file in views
const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const contactRouter = require('./routes/contact-us');
const successRouter = require('./routes/success');


app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, "public")));

app.use('/admin', adminRouter);
app.use(shopRouter);
app.use(contactRouter);
app.use(successRouter);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); 
})

const PORT = 2300;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/admin/add-product`);
});
