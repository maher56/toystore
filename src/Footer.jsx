function Footer() {
    return ( 
    <footer>
        <div className="container-md">
            <div className="logo">
                <a className="f-d4 fd-md-d3" href="index.html">ToyStore</a>
            </div>
            <ul>
                <li><a href="index.html">home</a></li>
                <li><a href="catalog.html">Catalog</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contacts</a></li>
            </ul>
            <ul className="social">
                <li><a href="#"><img src="../images/twitterIconWhite.svg" alt=""/></a></li>
                <li><a href="#"><img src="../images/facebookIconWhite.svg" alt=""/></a></li>
                <li><a href="#"><img src="../images/instagramIconWhite.svg" alt=""/></a></li>
                <li><a href="#"><img src="../images/pinterestIconWhite.svg" alt=""/></a></li>
                <li><a href="#"><img src="../images/youtubeIconWhite.svg" alt=""/></a></li>
            </ul>
        </div>
    </footer>
);}

export default Footer;