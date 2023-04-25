const {app, port} = require('./sicei')

app.listen(port,() =>{
    console.log(`app initialized! on port: ${port}`);
} )