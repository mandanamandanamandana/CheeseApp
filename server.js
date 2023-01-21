/////////////////////////
// DEPENDENCIES
/////////////////////////
const express = require("express")


/////////////////////////
// The Application Object
/////////////////////////
const app = express()


/////////////////////////
// Routes
/////////////////////////

// home route that says "hello world" to test server is working
app.get("/", (req, res) => {
    //res.json let's us send a response as JSON data
    res.json({
        response: "Hello World"
    })
})

/////////////////////////
// Listener
/////////////////////////
// We chose a non 3000 port because react dev server uses 3000 the highest possible port is 65535
// Why? cause it's the largest 16-bit integer, fun fact!
// But because we are "elite" coders we will use 1337
app.listen(1337, () => console.log("Listening on port 1337"))

/////////////////////////
// The Data
/////////////////////////
const cheese = [
    {name: "swiss", role: "ninja"},
    {name: "Michaelangelo", role: "ninja"},
    {name: "Donatello", role: "ninja"},
    {name: "Raphael", role: "ninja"},
]