import Story from "./Story";
import Contact from "./Contact";
function About() {
    return (
    <div className="about">
        <div className="container">
        <section className="intro text-center">
            <p className="text-main mb-3">All You Need is Fun!</p>
            <h1 className="f-d3 f-md-d2 mb-3">Introducing ToyStore</h1>
            <p className="f-d4">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is
            difficult, as it must appeal to, entice, and convince consumers to take action.</p>
            <img src="../images/about-image0.jpg" style={{borderRadius: 16,marginTop: 35}} alt=""/>
        </section>
        </div>

        <div className="container" id="webflow">
        <section className="intro text-center">
            <p className="text-main mb-3">Made for Webflow</p>
            <h1 className="f-d3 f-md-d2 mb-3">Simple & beautiful toys</h1>
            <div className="row g-3 mt-5 mb-5">
                <div className="show-when-scroll col-12 col-lg-6"><img src="../images/boys.jpg" style={{borderRadius: 16}} alt=""/></div>
                <div className="col-12 col-lg-6 text-lg-start order-lg-first">
                    <h1 className="f-d3 f-md-d2 mb-3 underline w-fit mx-auto mx-lg-0">Beautifully Toys</h1>
                    <p className="text-muted mt-5">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is
                    difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write
                    perfect ad copy</p>
                    <a href="index.html" className="but mt-3">Get It for FREE!</a>
                </div>
            </div>
        </section>
        </div>

        <div className="container" id="webflow">
        <section className="intro text-center pt-0">
            <div className="row g-3 mb-5">
                <div className="show-when-scroll col-12 col-lg-6"><img src="../images/about-image1.jpg" style={{borderRadius: 16}} alt=""/></div>
                <div className="col-12 col-lg-6 text-lg-start">
                    <h1 className="f-d3 f-md-d2 mb-3 underline w-fit mx-auto mx-lg-0">100% healthy</h1>
                    <p className="text-muted mt-5">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is
                    difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write
                    perfect ad copy</p>
                    <a href="catalog.html" className="but mt-3">Explore Our Toys</a>
                </div>
            </div>
        </section>
        </div>
        <Story/>
    </div>
    );}

export default About;