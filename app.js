const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const app = express();

let PORT = process.env.PORT || 3000;
app.listen(PORT);

app.use(expressLayouts)

app.use(express.static("public"));

app.set('view engine', 'ejs')

app.use(express.static("views", {
    extensions: ['html'],
}));
