const path =require('path');
console.log('current file info:\n')
console.log('fileName:',__filename);
console.log('Directory Name:',__dirname);

console.log('\n'+'--'.repeat(50)+'\n');

const filePath ='/nishan/documents/nextLevel.pdf';
console.log('analysis path:',filePath,'\n');

console.log('Directory:',path.dirname(filePath))
console.log('Base Name:',path.basename(filePath));

console.log('file extension:',path.extname(filePath));
console.log('File Name:',path.basename(filePath,path.extname(filePath)))

const parsed =path.parse(filePath);
console.log('parsed path Object:',parsed);

console.log('formetted Path:',path.format(parsed))

