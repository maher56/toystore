import AllToys from '../Toys.json'
import Toy from './Toy.jsx'
function Toys(props) {
    return ( 
    <section className="toys">
        <div className="container">
            <div className="header d-flex justify-content-between align-items-center">
                <div className="f-d4">{props.type } Animals</div>
                <a href="catalog.html" className="link">See All Toys <span className="arrow-right"><img src="../images/arrow-right.svg" alt=""/></span></a>
            </div>
            <div className="body text-white text-center">
                {AllToys.filter(e => props.type.length==0 || e.type === props.type).map((e,i) => {
                    return <Toy key={i} value = {e} />
                })}
            </div>
        </div>
    </section> );
}

export default Toys;