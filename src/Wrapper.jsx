function Wrapper() {
    return ( <section className="wrapper">
    <div className="container">
        <div className="toy-card card-1 show-when-scroll">
            <img src="../images/bear.png" alt=""/>
            <div className="text">
                <p className="main-p text-white">Stuffed Animals</p>
                <a href="catalog.html" className="but but-white">Shop Now</a>
            </div>
        </div>
        <div className="toy-card card-2 show-when-scroll">
            <img src="../images/happy-flower.png" alt=""/>
            <div className="text">
                <p className="main-p text-white">Wooden Toys</p>
                <a href="catalog.html" className="but but-white">Shop Now</a>
            </div>
        </div>
    </div>
</section> );
}

export default Wrapper;