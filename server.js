import express, { request, response } from "express";

const app = express()

app.post('/users', (request, response) => {
    console.log(request)
    response.send('Ok request')
})

app.get('/users', (request, response) => {
    response.send('ok. deu certo')
})

app.listen(8888)