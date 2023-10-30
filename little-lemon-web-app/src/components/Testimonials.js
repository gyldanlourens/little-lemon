import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {

    const reviews = [
        {
        review: 4,
        getImageSrc: () => require("../images/alfredo-cook.jpg"),
        reviewer:"Alfredo Cook",
        reviewtext:"Incredible seafood, vibrant spices. This Mediterranean restaurant is a culinary delight!",
        },
        {
        review: 5,
        getImageSrc: () => require("../images/chloe-nichols.jpg"),
        reviewer:"Chloe Nichols",
        reviewtext:"Authentic cuisine, cozy ambiance. A taste of the Mediterranean in every bite.",
        },
        {
        review: 5,
        getImageSrc: () => require("../images/floyd-henry.jpg"),
        reviewer:"Floyd Henry",
        reviewtext:"Delicious mezze, fresh ingredients, and friendly service. A Mediterranean gem!",
        },
        {
        review: 3,
        getImageSrc: () => require("../images/kim-reynolds.jpg"),
        reviewer:"Kim Reynolds",
        reviewtext:"Savory flavors, generous portions. Must-visit for Mediterranean food lovers.",
        },
    ]

    return (
        reviews.map((review) => (
            <TestimonialCard
                rating={review.review}
                imageSrc={review.getImageSrc()}
                reviewer={review.reviewer}
                reviewtext={review.reviewtext}
            />

    )
    )
    )
}

export default Testimonials;