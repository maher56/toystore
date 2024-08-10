import Head from "./Head";
import Story from "./Story";
import Toys from "./Toys";
import Wrapper from "./Wrapper";
import Contact from "./Contact";
function MainPage() {
    return(
    <>
    <div className="home">
        <Head/>
        <Wrapper/>
        <Toys type = "stuffed" />
        <Toys type = "wooden" />
        <Story/>
      </div>
        {/* <Contact/> */}
      </>
      );
}

export default MainPage;