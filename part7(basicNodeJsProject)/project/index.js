const fs = require('fs');
const path = require('path');
const http = require('http');

http.createServer((req, res) => {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) throw err;
        res.end(data);
    })
}).listen(3000, () => {
    console.log('server is running on port 3000');
})