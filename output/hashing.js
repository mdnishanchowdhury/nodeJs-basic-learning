const crypto = require('crypto');

console.log("\n MB5 Hash:");
const md5Hash = crypto.createHash('md5').update('password123').digest('hex'); //not recommended

console.log("input: password123");
console.log('MB5 HasedPassword:', md5Hash)

const sha256Hash =crypto.createHash('sha256').update('password123').digest('hex');

console.log("input: password123");
console.log('MB5 HasedPassword:', sha256Hash)


const sha512Hash =crypto.createHash('sha512').update('password123').digest('hex');

console.log("input: password123");
console.log('MB5 HasedPassword:', sha512Hash)