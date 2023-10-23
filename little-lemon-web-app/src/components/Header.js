import logo from "../images/logo.svg"

function Header(){
    return (
        <>
        <head>
            <meta name="description" content="Little Lemon: Mediterranean restaurant, focused on traditional recipes served with a modern twist."/>
            <meta name="og:title" content="Little Lemon Restaurant"/>
            <meta name="og:description" content="Little Lemon: Mediterranean restaurant, focused on traditional recipes served with a modern twist."/>
            <meta name="og:image" content={logo}/>
        </head>
        <header>
            <img src= {logo} alt="Logo"/>
        </header>
        </>
    )

}

export default Header;