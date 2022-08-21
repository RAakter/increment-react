//console.log(React);
//console.log(ReactDOM);

const domContainer = document.querySelector("#root");

const myElement = React.createElement("div", null, [
    React.createElement("p", null, "Hi"),
    React.createElement("p", null, "BYE!"),
]);

ReactDOM.render(myElement, domContainer);