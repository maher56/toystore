function Subscribe() {
    return ( 
    <section className="subscribe">
        <div className="container show-when-scroll">
            <div className="sub">
                <img src="../images/paperplaneIconWhite.svg" alt=""/>
                <h1 className="f-d4 f-sm-d3">Subscribe to our channel
                    & get <span className="text-main"> 10% discount!</span></h1>
                    <form>
                        <input placeholder="Enter Your telegram handle" type="text" className="my-form"/>
                        <input type="submit" className="but" value="Subscribe"/>
                    </form>
            </div>
        </div>
    </section>);}

export default Subscribe;