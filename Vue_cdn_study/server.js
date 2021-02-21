const express = require('express');
const app = express();
const port = 3000;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/src/views');
app.use(express.static(__dirname + '/src/assets'));

app.get('/', function (req, res) {
  res.render('index.html');
});

app.get('/ping', function (req, res) {
  res.send('pong');
});

app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
