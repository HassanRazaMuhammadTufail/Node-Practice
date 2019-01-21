// var http = require('http');
// var url = require('url');
// var fs = require('fs');
// var querystring = require('querystring');
// var server = http.createServer();

// server.on('request' , function(request,response){
//     // console.log(request.url)
//     var requestUrl = url.parse(request.url);
//     var queryObj = querystring.parse(requestUrl.query);
//     // console.log(queryObj)
//     // fs.readFile('./index.html', (err,data) => {
//     //     response.write(data);
//     //     response.end()

//     // })



//     var stream = fs.createReadStream('./index.html');
//     stream.pipe(response)
//     // console.log(response.method)
// })

// server.listen(8000,function(error){
//     if(error !== null){
//         console.log('Server is Listening')
//     }
// })



///////////////////// TASK 1 ///////////////////////////////
var http = require('http');
var server = http.createServer();
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

server.on('request' , function(request,response){
    console.log(request.url)
    // var requestUrl = url.parse(request.url);
    // var queryObj = querystring.parse(requestUrl.query);
    // console.log(queryObj , '44')
    if(request.url === '/'){
        var stream = fs.createReadStream('./index.html');
            stream.pipe(response)
            console.log(response.method)

    }
    else if(request.url !== '/')
        {
        var stream = fs.createReadStream('./404.html');
            stream.pipe(response)
            console.log(response.method)
    }
    })


server.listen(8000,function(error){
    if(error !== null){
        console.log('Server is Listening')
    }
})
