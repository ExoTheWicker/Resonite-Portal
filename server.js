const express = require('express')

const app = express();

app.set("view engine","ejs")
app.set("views", "public/views")

app.get('/', (req, res) =>{

    res.render('index');
})


app.listen(8008)