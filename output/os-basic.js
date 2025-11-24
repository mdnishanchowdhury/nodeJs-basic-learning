const os = require('os');
console.log('System info \n');

console.log('-'.repeat(50));

console.log('Platform Details:');
console.log('PlatForm:', os.platform());
console.log('Architecture', os.arch());
console.log('Os type', os.type());
console.log('Os Relase:', os.release());
console.log('Hostname:', os.hostname());

console.log('-'.repeat(50));
console.log('\nCPU info:');

const cpus = os.cpus();
console.log('CPU model:', cpus[0].model);
console.log('Cores:', cpus.length);
console.log('Cpu Speed:', cpus[0].speed);

console.log('-'.repeat(50));

const totalMem = os.totalmem();
const freeMem = os.freemem();

console.log("Total memory", (totalMem / 1024 / 1024 / 1024).toFixed(2));

console.log("Free memory", (freeMem / 1024 / 1024 / 1024).toFixed(2));


const upTime = os.uptime();

const days = Math.floor(upTime / 86400);
const hour = Math.floor((upTime % 86400) / 3600);
const min = Math.floor((upTime % 3600) / 60)

console.log(`${days} din ${hour} Hours ${min} minutes`)