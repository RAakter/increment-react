//console.log(React);
//console.log(ReactDOM);

const domContainer = document.querySelector("#root");

// const myElement = React.createElement("div", null, [
//     React.createElement("p", null, "Hi"),
//     React.createElement("p", null, "BYE!"),
// ]);

const Increment = () => {
    const [counter, setCounter] = React.useState(0);
    console.log(counter);
    console.log(setCounter);
    return (
        <div>
            <h1 id="display">{ counter }</h1>
            <div>
                <button id="btn" onClick= { () => setCounter(counter+1)}>Increment +</button>
            </div>
        </div>
    )
};

// ReactDOM.render(<Increment/>, domContainer);

ReactDOM.render(
    <div className="container">
        <Increment/>
        <Increment/>
        <Increment/>
    </div>,
domContainer);