/*
 * @Author: your name
 * @Date: 2021-11-05 19:45:24
 * @LastEditTime: 2021-11-05 20:39:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \GreadySnake\server\app.js
 */
let http = require('http')
let fs = require('fs')
let server = http.createServer()

server.on('request', function(req, res){
    // index.html
    let url = req.url
    if(url === '/') {
        fs.readFile('./font/index.html', function (err, data){
            if(err){
                res.setHeader('Content-Type',  'text/plain; charset=utf-8')
                res.end('文件读取失败，请稍后重试')
            } else{
                res.setHeader('Content-Type',  'text/html; charset=utf-8')
                console.log(data);
                res.end(data)
            }
        });
    }
})
server.listen(3000, function(){
    console.log('服务器启动成功了s')
})