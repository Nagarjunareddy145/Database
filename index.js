//const fs = require('fs'); // Import fs module
//fs.writeFileSync('notes.txt', 'I hate to code');
//fs.writeFileSync('notes.txt', 'I  am good');

const fs = require('fs');
fs.readFile('notes.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

const path = require('path');
const filePath = '/task1/nodemodules/docs/notes.txt';
console.log(path.dirname(filePath)); // Output: /home/user/docs
