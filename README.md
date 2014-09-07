## os-url
A [node.js](http://nodejs.org) utility


### Installation
```shell
npm install os-url
```


### API
use as a module..
```javascript
var link = require('os-url')

link('github', function(err, data) {
  if (err) return console.error(err)
  console.log(data)
})
```

_or from the command line.._
```javascript
node index.js 'github'

//output is:
https://github.com/
```


### License
MIT

