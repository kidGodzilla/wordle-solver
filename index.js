
const lineByLine = require('n-readlines');
const fs = require('fs');

const liner = new lineByLine('./words.txt');

let line, words = [];

while (line = liner.next()) {
    if (line) line = line.toString('utf8').replace('\r', '');
    if (line && line.length === 5) words.push(line);
}

fs.writeFileSync('./words.json', JSON.stringify(words));
console.log('word count:', words.length);

