const fs = require('fs');
//reas files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });


//write files
// fs.writeFile('./docs/blog2.txt', 'hello, blog2',()=>{
//     console.log('file was written');
    
// });


//directoins
// if(!fs.existsSync('./assets')){
// fs.mkdir('./assets',(err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log('folder created');
// });
// }else{
//     fs.rmdir('./assets',(err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('folder deleted');
//     });
// }

//delete files
if(fs.existsSync('./docs/deleteme.txt')){
fs.unlink('./docs/deleteme.txt', (err)=> {
if (err){
    console.log(err);
}
console.log('file deleted');

});

}
