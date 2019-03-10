const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port=3000

app.set('view engine', 'ejs')

app.get("/", function(req,res){

    var today = new Date()
    var currentDay = today.getDay()
    var day = ""

    switch (currentDay) {
        case 0:
            day = "Sunday"
            break;
            case 1:
            day = "Monday"
            break;
            case 2:
            day = "Tuesday"
            break;
            case 3:
            day = "Wednesday"
            break;
            case 4:
            day = "Thursday"
            break;
            case 5:
            day = "Friday"
            break;
            case 6:
            day = "Saturday"
            break;
    
        default:
            console.log("No day at all")
            break;
    }

    res.render("list", {kindOfDay: day})


    /* if (currentDay === 0 || currentDay===6) {
        day = "Weekend"
    } else {
        day = "Weekdays"
    }
 */

})

app.listen(port, function(){
    console.log("The server listens " + port)
})