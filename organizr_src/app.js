var  express = require('express')
var app = express()
app.use('/static', express.static(path.join(__dirname, 'public')))



app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
