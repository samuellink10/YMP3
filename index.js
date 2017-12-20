var express = require("express");
var app = express();
var port = 3333;
const fs = require('fs');
const youtubedl = require('youtube-dl');

app.get('/download',(req,res)=>{
    //let url = req.query.url;
   let url = req.query.url;
try {

    var video = youtubedl('http://www.youtube.com/watch?v=90AiXO1pAiA',['--format=18'],{ cwd: './File/' });
    
    // Will be called when the download starts.
    video.on('info', function(info) {
      console.log('Download started');
     // console.log('filename: ' + info.filename);
    //  console.log('size: ' + info.size);
    });
    
    video.pipe(fs.createWriteStream('myvideo.mp4'));
     


    res.send(JSON.stringify({"Sucess":url})); 
} catch (error) {
    Console.log("errooooo: " +error);
    res.send(JSON.stringify({"Erro":"Erro!"})); 
  
}
    
});

app.listen(port, (err) =>{
if (err) return console.log('Erro: ',err );

console.log(`server is listening on ${port}`)
});