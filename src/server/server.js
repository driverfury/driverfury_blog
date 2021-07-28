const express = require('express')
var cors = require('cors')

var app = express()
app.use(express.json())
app.use(cors())
var db = require('./database.js')

const HTTP_PORT = 8000
app.listen(HTTP_PORT, () => {
  console.log('[INFO] Server running on port ' + HTTP_PORT)
})

/*
 * TODO: to delete
 * This is only for DEBUG
 */
app.get('/api/users', (req, res, next) => {
  var sql = 'SELECT * from users'
  var params = []
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({'message':err.message})
      return
    }
    res.status(200).json({
      'data': rows
    })
  })
})

/*
 * NOTE(driverfury): Authentication routes
 */

function make_token(length = 32) {
  var result           = ''
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random()*charactersLength));
  }
  return result;
}

app.post('/api/login', (req, res, next) => {
  console.log('[DEBUG] Login attempt...')
  if (!req.hasOwnProperty('body') ||
      !req.body.hasOwnProperty('username') ||
      !req.body.hasOwnProperty('username')) {
    console.log('[DEBUG] Invalid credentials')
    res.status(400).json({'message': 'Invalid credentials'})
    res.send()
    return
  }
  var md5 = require('md5')
  var username = req.body.username
  var password = md5(req.body.password)
  var sql = 'SELECT * from users WHERE username = ? AND password = ?'
  var params = [username, password]
  db.all(sql, params, (err, rows) => {
    if (err) {
      console.log('[DEBUG] Invalid credentials')
      res.status(400).json({'message': 'Invalid credentials'})
    } else {
      if(rows.length > 0) {
        var token = make_token(32);
        sql = 'UPDATE users SET api_token = ? WHERE username = ?'
        db.run(sql, [token, username], (err) => {
          if(!err) {
            console.log('[DEBUG] User ' + username + ' logged in')
            res.status(200).json({
              username: rows[0].username,
              token: token,
              isAdmin: (rows[0].admin) ? true : false
            })
            res.send()
            return
          } else {
            console.log('[DEBUG] Cannot create API token')
            res.status(400).json({'message': 'Cannot create API token'})
            res.send()
            return
          }
        })
      } else {
        console.log('[DEBUG] Invalid credentials')
        res.status(400).json({'message': 'Invalid credentials'})
        res.send()
        return
      }
    }
  })
})

app.post('/api/check-token', (req, res, next) => {
  if (!req.hasOwnProperty('body') ||
      !req.body.hasOwnProperty('token')) {
    res.status(400).json({'message': 'Invalid token'})
    res.send()
    return
  }
  var token = req.body.token
  var sql = 'SELECT * FROM users WHERE api_token = ?'
  var params = [token]
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({'message': 'Invalid token'})
      res.send()
      return
    }
    if(rows.length == 0) {
      res.status(400).json({'message': 'Invalid token'})
      res.send()
      return
    }
    res.status(200).json({
      data: {
        username: rows[0].username,
        token: token,
        isAdmin: (rows[0].admin) ? true : false
      }
    })
    res.send()
    return
  })
})

/*
 * NOTE(driverfury): Posts routes
 */

app.get('/api/posts', (req, res, next) => {
  var sql = 'SELECT * from posts'
  var params = []
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({'message':err.message})
      return
    }
    res.status(200).json({
      'data': rows
    })
  })
})

// 404 Not found
app.use(function (req, res) {
  res.status(404)
  res.send()
  return
})
