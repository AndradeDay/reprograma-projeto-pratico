const app =  require('./src/app')
const port = 3002;

app.listen(port, function(){
    console.log(`app está rodando na porta ${port}`);
})