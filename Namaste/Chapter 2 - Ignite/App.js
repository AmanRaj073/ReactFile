import React from "react";
import ReactDOM from "react-dom";

const Heading = React.createElement("h1", { id: "title" }, "React Element");

const Header = () => {
    return (
        <>
            {Heading}
            <h1>Hello From Functional Component</h1>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Header());
root.render(<Header/>);
