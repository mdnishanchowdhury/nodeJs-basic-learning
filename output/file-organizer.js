const fs = require('fs');
const path = require('path');

const sourcedir = path.join(__dirname, 'messy-files');

const organizedDir = path.join(__dirname, 'organized');

const categories = {
    image: ['.jpg', '.jpeg', '.png', '.svg'],
    documents: ['.pdf'],
    videos: ['.mp4', '.avi'],
    audio: ['.mp3', '.py']
}

const testFile = [
    'vacation.jpg',
    'report.pdf',
    'music.mp3',
    'video.mp4'
]

function initializeDirectories() {
    if (!fs.existsSync(sourcedir)) {
        fs.mkdirSync(sourcedir, { recursive: true });

        testFile.forEach(file => {
            fs.writeFileSync(path.join(sourcedir, file), `Content of ${file}`)
        })
    }
    console.log('Messy directories file are created');

    if (!fs.existsSync(organizedDir)) {
        fs.mkdirSync(organizedDir, { recursive: true })
    }
    Object.keys(categories).forEach(category => {
        const categoryPath = path.join(organizedDir, category);

        if (!fs.existsSync(categoryPath)) {
            fs.mkdirSync(categoryPath)
        }
    })
}

function getCategory(filename) {
    const ext = path.extname(filename).toLowerCase();

    for (const [category, extensions] of Object.entries(categories)) {
        if (extensions.includes(ext)) {
            return category;
        }
    }
    return "others";
}


function organizeFiles() {
    console.log('File organizer \n');
    console.log('source:', sourcedir);
    console.log('Destination', organizedDir);
    console.log('\n' + '-'.repeat(50) + '\n');

    const files = fs.readdirSync(sourcedir);

    if (files.length === 0) {
        console.log('No files to work on!!');
        return
    }
    console.log(`Fount ${files.length} files to organize \n`);

    const stats = {
        total: 0,
        byCategory: {}
    }

    files.forEach(file => {
        const sourcePath = path.join(sourcedir, file);
        const stat = fs.statSync(sourcePath);
        if (stat.isDirectory()) {
            return;
        }
        const category = getCategory(file)
        const destDir = path.join(organizedDir, category);
        const destPath = path.join(destDir, file);
        fs.copyFileSync(sourcePath, destPath);

        stats.total++;
        stats.byCategory[category] = (stats.byCategory[category] || 0) + 1

        console.log(`${file}`);
        console.log(`${category}`);
        console.log(`${stat.size}`);
    });
}

function showHelp() {
    console.log(`file organizer - usage: 
        commands: init - create file
        organize - organize file into categories
        
        example"
        node file-organizer init
        node file-organizer organize

        `)
}
const command = process.argv[2];

switch (command) {
    case 'init':
        initializeDirectories();
        break;
    case 'organize':
        organizeFiles();
        break;
    default:
        showHelp()
        break;
}
