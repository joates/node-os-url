var request = require('request')
  , Trumpet = require('trumpet')
  , tr = Trumpet()

var main = module.exports = function(str, cb) {

  if (! str)
    return cb(new Error('Please provide a "search string" parameter'))

  var url = 'https://duckduckgo.com/?q='+ str.replace(/\s+/g, '+')

  tr.select('.result__title--official a', function (link) {
    link.getAttribute('href', function(href) {
      cb(null, href)
    })
  })

  request(url).pipe(tr)
}

if (! module.parent) {
  main(process.argv[2], function(err, data) {
    if (err) return console.error(err)
    console.log(data)
  })
}

