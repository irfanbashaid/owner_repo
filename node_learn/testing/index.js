console.log('welcome to mytext.txt');
// const fs = require('fs');
// const os = require('os');
//var user = os.userInfo();


const notes = require('./notes');

var res = notes.add(3,5);

console.log(res);


// fs.appendFile('mytext.txt',`${user.username}${user.gid}${user.uid}${user.homedir}${user.shell}`, (ewrr) => {
//     if(ewrr) throw ewrr;
//     console.log('The "hello bolt" was successfully appended');
// });