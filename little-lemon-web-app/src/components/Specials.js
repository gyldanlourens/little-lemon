import Card from "./Card"

const Specials = () => {

    const specials = [
        {
        key:"greek-salad",
        name:"Greek Salad",
        price:"$12.99",
        description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        getImageSrc: () => require(`../images/greek-salad.jpg`)
        },
        {
        key:"bruchetta",
        name:"Bruchetta",
        price:"$5.99",
        description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        getImageSrc: () => require(`../images/bruchetta.jpg`)
        },
        {
        key:"lemon-dessert",
        name:"Lemon Dessert",
        price:"$5.00",
        description:"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        getImageSrc: () => require(`../images/lemon-dessert.jpg`)
        },
    ]

    return (

        specials.map((special) => (
            <Card
              key={special.key}
              name={special.name}
              description={special.description}
              price={special.price}
              imageSrc={special.getImageSrc()}
            />
            )
        )
    )
}

export default Specials;