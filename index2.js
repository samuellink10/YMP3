var fs = require('fs');
var youtubedl = require('youtube-dl');

var video = youtubedl('http://www.youtube.com/watch?v=90AiXO1pAiA',['--format=18'],{ cwd: './File/' });

// Will be called when the download starts.
video.on('info', function(info) {
  console.log('Download started');
  console.log('filename: ' + info.filename);
  console.log('size: ' + info.size);
});

video.pipe(fs.createWriteStream('myvideo.mp4'));
 

