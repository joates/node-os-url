var test = require('tape')
  , os_url = require('../index')
  , fixture = 'https://github.com/'
  , output = ''

test('github official site (cli)', function(t) {
  t.plan(1)

  var args = [ __dirname+'/../index.js', 'github']
    , spawn = require('child_process').spawn
    , child = spawn('node', args)

  child.stdout.on('data', function(chunk) {
    output += chunk.toString().replace(/\n$/, '')
  })

  child.stdout.on('end', function(chunk) {
    if (chunk) output += chunk.toString().replace(/\n$/, '')
    t.equal(output, fixture, 'stdout matches fixture')
    t.end()
  })
})

test('github official site (module)', function(t) {
  t.plan(1)

  os_url('github', function(err, data) {
    t.equal(data, fixture, 'stdout matches fixture')
    t.end()
  })
})

