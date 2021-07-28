var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = 'src/server/db.sqlite'

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.log('[ERROR] Cannot open the database')
  } else {
    console.log('[INFO] Connected to the SQLite database')

    /*
     * NOTE(driverfury): Create users table
     */
    console.log('[INFO] Creating table users...')
    db.run(
      `CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username text UNIQUE, 
        password text, 
        admin bit DEFAULT(0),
        api_token text DEFAULT(NULL),
        CONSTRAINT username_unique UNIQUE (username)
      );`,
      (err) => {
        if (!err) {
          console.log('[INFO] Table users created')
          var insertQuery = 'INSERT INTO users (username, password, admin) VALUES (?, ?, ?);';
          db.run(insertQuery, ['admin', md5('admin123'), 1])
          db.run(insertQuery, ['user', md5('user123'), 0])
        } else {
          console.log('[ERROR] ' + err.message)
        }
      })

    /*
     * NOTE(driverfury): Create posts table
     */
    console.log('[INFO] Creating table posts...')
    db.run(
      `CREATE TABLE posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title text, 
        description text, 
        body longtext, 
        image text, 
        date date default CURRENT_TIMESTAMP
      );`,
      (err) => {
        if (!err) {
          console.log('[INFO] Table posts created')
          var insertQuery = 'INSERT INTO posts (title, description, date, image, body) VALUES (?, ?, ?, ?, ?);';
          db.run(insertQuery, [
            'How to make an ASCII game engine',
            'ASCII art is a lot of fun, in this post you will learn how to make a text-based ASCII game',
            '2021-07-25',
            'https://gfascii.art/wp-content/uploads/2019/10/Mario-and-Yoshi-1024x617.png',
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br><br><b>Why do we use it?</b><br><br>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).<br><br><b>Where does it come from?</b><br><br>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.<br><br>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.<br><br><b>Where can I get some?</b><br><br>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.<br><br>'
          ])
          db.run(insertQuery, [
            'Do we really need CRT lib for small programs?',
            'Using the C runtime library is not always a good idea, especially when you are developing a small application',
            '2021-07-26',
            'https://borncity.com/win/wp-content/uploads/sites/2/2017/06/MFVCR100-dll_thumb.jpg',
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br><br><b>Why do we use it?</b><br><br>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).<br><br><b>Where does it come from?</b><br><br>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.<br><br>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.<br><br><b>Where can I get some?</b><br><br>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.<br><br>'
          ])
        } else {
          console.log('[ERROR] ' + err.message)
        }
      })
  }
})

module.exports = db
