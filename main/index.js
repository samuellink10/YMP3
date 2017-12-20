const fs = require("fs");
const ps = require("stream")
const server = require('http').createServer();
const axios = require('axios');
const request = require('request');

server.on('request', (req, res) => {
    url  = 'www.youtube.com/watch?v=L4DgSWrlZ3U';
  const src = fs.createReadStream(url);
request(url,function(error,response,body){
    console.log('error:', error); 
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
});
//   axios.get(url)
//   .then(function(response){
//       console.log(response);
//   })
//   .catch(function(erro){
//       console.log('erro');
//     });
 // console.log(src);
 // src.pipe(res);
});

server.listen(8000);