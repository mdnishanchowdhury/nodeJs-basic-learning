const fs=require('fs');

console.log('Start Reading..')

fs.readFile('./data/diary.txt','utf-8',(error,data)=>{
    if(error){
        console.error('error happend:',error.message)
    }
    else{
        console.log('file content:')
        console.log(data)
    }
});
console.log('this runs immediately- no blocking')