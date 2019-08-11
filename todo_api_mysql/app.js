//tanchevc db name
const   bodyParser  = require("body-parser"),
        mysqlModel  = require("mysql-model"),
        express     = require("express"),
        app         = express();
const todoRoutes = require("./routes/todos");

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/todos',todoRoutes);


app.get('/',(req, res)=>{
    res.send("hellogggg");
});






app.listen(process.env.PORT, process.env.IP,()=>console.log("Server Running!"));
        
        
