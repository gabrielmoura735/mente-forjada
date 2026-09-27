const fs = require('fs');
let app = fs.readFileSync('app.js', 'utf8');

app = app.replace(/\\n/g, ''); // Fix literal \n
app = app.replace(/    \}\s*\}\s*\}\s*$/m, '    }\n}\n');

fs.writeFileSync('app.js', app, 'utf8');
