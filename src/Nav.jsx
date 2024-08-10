function Nav() {
    return ( <nav className="mainNav">
    <div className="container-md">
        <div className="logo">
            <a className="f-d4 fd-md-d3" href="index.html">ToyStore</a>
        </div>
        <ul>
            <li><a href="catalog.html">Catalog</a></li>
            {/* <li><a href="delivery.html">Delivery</a></li> */}
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">login</a></li>
        </ul>
        <div className="carts">
            <span>Cart</span>
            <span><img src="../images/cartIcon.svg" alt=""/></span>
            <span className="num-of-carts">0</span>
        </div>
        <div className="toggler"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40px" height="40px">
            <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" /></svg></div>
    </div>
</nav>);
}

export default Nav;