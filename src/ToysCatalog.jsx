import Buttons from "./Buttons";
import AllToys from "../Toys.json"
import Toy from "./Toy";
import AddCard from "./AddCard";

function ToysCatalog() {
    return (
        <section className="toys">
            <div className="container">
                {/* <AddCard/> */}
                <div className="body row gap-3 text-white text-center">
                {
                    AllToys.map((e,i) => {
                        return <Toy key={i} value={e}/>
                    })
                }
                </div>
            </div>
        </section> 
     );
}

export default ToysCatalog;