const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//configurar Nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
        express: server,
        noCache: true,
})

server
.use(express.urlencoded({extended:true}))
//configurar arquivos estaticos (css, scripts e imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)