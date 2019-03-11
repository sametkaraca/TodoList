const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port=3000

var items = ["Buy Food","Eat Food","Cook Food"]
var workItems =[]
var lavoroItems =[]

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))  //createas static files

app.get("/", function(req,res){

    var today = new Date()

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US", options)

    res.render("list", {listTitle: day, newListItems: items})

})

app.post('/', function(req,res){

    let item = req.body.newItem

    if (req.body.list === "Work") {
        workItems.push(item)
        res.redirect("/work")
    } else{
        items.push(item)
        res.redirect("/")
    }
})

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems})
})

app.post("/work", function(req, res){
    let item = req.body.newItem
    workItems.push(item)
    res.redirect("/work")
})

app.get("/about", function(req,res){
    res.render("about")
})











//Lsitens port
app.listen(port, function(){
    console.log("The server listens " + port)
})