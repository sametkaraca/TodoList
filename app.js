const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port=3000

var items = ["Buy Food","Eat Food","Cook Food"]

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req,res){

    var today = new Date()

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US", options)

    res.render("list", {KindOfDay: day, newListItems: items})

})

//POST from signup
app.post('/', function(req,res){
    var item = req.body.newItem

    items.push(item)

    res.redirect("/")
})

app.listen(port, function(){
    console.log("The server listens " + port)
})