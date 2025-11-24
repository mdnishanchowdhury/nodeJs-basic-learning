const fs = require('fs');

fs.writeFileSync('./output/temp.txt', 'this is a temp file');

console.log('temp file is created')

if (fs.existsSync('./output/temp.txt')) {
    console.log('file exists..')

    fs.unlinkSync('./output/temp.txt');
    console.log('file deleted')
}

try {
    fs.unlinkSync('./output/temp.txt')
} catch (error) {
    console.error(error.message)
}
fs.writeFile('./output/temp-2.txt', 'Aother temp file', (err) => {
    if (err) return console.err(err.message)

    console.log("Another temp file created");
    fs.unlink('./output/temp-2.txt', (err) => {
        if (err) {
            console.error(err.message)
        }
        else {
            console.log('temp-2 deleted')
        }
    })
})
