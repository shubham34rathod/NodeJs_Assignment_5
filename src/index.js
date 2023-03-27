var http = require("http");
var fs=require('fs')
// var url=require('url')

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    // res.writeHeat(200,'ok',{'content-Type':'text/html'})
    if(req.url==='/')
    {
       
    }
    else if(req.url==='/welcome')
    {
        let result=fs.readFileSync('./welcome.html')
        res.end(result)
    }
    else if(req.url==='/contact')
    {
        let result2=fs.readFileSync('./contact.html')
        res.end(result2)
    }
    // else if(req.url==='/')
    // {
    //     // let result3=fs.readFileSync('./home.html')
    //     req.end("home")
    // }
}

httpServer.listen(8081,'localhost',()=>{
    console.log("success")
})

// module.exports = httpServer;