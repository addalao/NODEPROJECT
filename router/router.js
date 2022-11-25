// const { json } = require('body-parser');
const express = require('express');
const router = express.Router()
router.use(
    express.urlencoded({
        extended:true
    })
)

router.get('/add',(req,res)=>{
    
    res.end(JSON.stringify({
        name:'liufei',
        age:'12'
    }))
})

router.get('/json',(req,res)=>{
    const fnName = req.query.callback
    const data = {
        name:'1',
        age:2,
    }

    res.end(`${fnName}(${JSON.stringify(data)})`)
    
})

router.post('/add',(req,res)=>{
    res.end("ok")

})

router.delete('/delete',(req,res)=>{
    res.end(JSON.stringify({
        name:'li',
        age:20
    }))
})

router.post('/book',(req,res)=>{
    res.end("book ok")

})

module.exports = router