function Toy(props) {
    return (
    <a href="/" className=" d-block my-card p-4 show-when-scroll">
        <div className="image"><img src={props.value.img} alt=""/></div>
        <p>{props.value.name}</p>
        <button className="but">${props.value.price}USD</button>
    </a>);}

export default Toy;