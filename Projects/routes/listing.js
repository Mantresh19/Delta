const express = require("express")
const router = express.Router();
const Listing = require("../models/listing")
const wrapAsync = require("../utils/wrapAsync")
const Review = require("../models/review")
const {listingSchema, reviewSchema} = require("../schema")
const ExpressError = require("../utils/ExpressError")

const validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body)
    if(error) {
        let errMsg = error.details.map((el) => el.message).join(",")
        throw new ExpressError(400, result.error)
    } else {
        next()
    }
}

const validateReview = (req, res, next) => {
    let {error} = reviewSchema.validate(req.body)
    if(error) {
        let errMsg = error.details.map((el) => el.message).join(",")
        throw new ExpressError(400, result.error)
    } else {
        next()
    }
}

// Index route
router.get("/", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings})
}))

// Edit Route
router.get("/new", (req, res) => {
    res.render("listings/new.ejs")
})

// Show Route
router.get("/:id", wrapAsync(async(req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs", {listing})
}))

// Create Route
router.post("/", validateListing, wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing)
    await newListing.save()
    res.redirect("/listings")
}))

// Edit Route
router.get("/:id/edit", wrapAsync(async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id)
    res.render("listings/edit.ejs", {listing})
}))

// Update Route
router.put("/:id", validateListing, wrapAsync(async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing})
    res.redirect(`/listings/${id}`)
}))

// Delete Listing Route
router.delete("/:id", wrapAsync(async(req, res) => {
    let {id} = req.params  
    let deletedListing = await Listing.findByIdAndDelete(id)
    console.log(deletedListing)
    res.redirect("/listings")
}))

// Reviews (EX)
router.post("/:id/reviews", validateReview, wrapAsync(async(req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    console.log("new review saved")
    // res.send("new review saved")
    res.redirect(`/listings/${listing._id}`)
}))

// Delete Reviews Route
router.delete("/:id/reviews/:reviewId", wrapAsync(async (req, res) => {
    let { id, reviewId} = req.params

    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId)

    res.redirect(`/listings/${id}`)
}))

module.exports = router