const TestimonialCard = ({rating, imageSrc, reviewer, reviewtext}) => {
    return (
        <article>
            <p><strong>Rating: {rating} / 5 </strong></p>
            <img src={imageSrc} alt="Reviewer" className="reviewer"/>
            <h6  className="reviewer">{reviewer}</h6>
            <p>{reviewtext}</p>
        </article>
    )
}

export default TestimonialCard;