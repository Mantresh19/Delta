const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const Listing = require("./models/listing")
const path = require("path")
const methodoverride = require("method-override")
const ejsMate = require("ejs-mate")
const wrapAsync = require("./utils/wrapAsync")
const ExpressError = require("./utils/ExpressError")
const {listingSchema, reviewSchema} = require("./schema")
const Review = require("./models/review")
const listings = require("./routes/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"

main().then(() => {
    console.log("Connect to DB")
})
.catch((err) => {
    console.log(err)
})

async function main() {
    await mongoose.connect(MONGO_URL)
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(methodoverride("_method"))
app.engine('ejs', ejsMate)
app.use(express.static(path.join(__dirname, "views/public")))

app.get("/", (req, res) => {
    res.send("Hi, I am root")
})

app.use("/listings", listings)

app.use((req, res, next) => {
    next(new ExpressError(404, "Page not Found!"))
})

app.use((err, req, res, next) => {
    let{statusCode = 500, message="Something went wrong"} = err
    res.status(statusCode).render("error.ejs", { message })
    // res.status(statusCode).send(message)
})

app.listen(port, (req, res) => {
    console.log(`listening to port: ${port}`);
});
