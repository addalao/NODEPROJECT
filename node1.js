const path = require('path'); //路径处理对象
const express = require('express'); //express框架函数
const app = express()//实例对象
const indexPath = path.join(__dirname,'/html','/dist') //网站所处地址
const router = require(path.join(__dirname,'/router','/router.js'))//router所处地址

const ip = getIPAdress()
function getIPAdress() {//获取本机ip地址
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}

app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))

/**注册路由 */

app.use('/user',router)

/**错误中间件 */
app.use((err,req,res,next)=>{
    res.status(500).json({
        message: err.message
    })
    console.log( err.message);
})
/**启动服务 */
app.listen(80,()=>{
    console.log(`http://${ip}:80`);
})