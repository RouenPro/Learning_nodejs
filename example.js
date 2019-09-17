const fs = require('fs')
fs.writeFileSync("file.txt","Hello this file has been written again")
fs.appendFileSync("file.txt","Changed already---------")