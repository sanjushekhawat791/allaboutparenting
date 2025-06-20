const div = React.createElement(
    "div",
    {id: "parent"},
   [ React.createElement(
        "div",
        {id: "parent"},
        [
            React.createElement("h1", {}, "This is h1 tag"),
            React.createElement("h1", {}, "This is another h1 tag")
        ]
    ),

    React.createElement(
        "div",
        {id: "child"},
        [
            React.createElement("h1", {}, "This is h1 tag"),
            React.createElement("h1", {}, "This is another h1 tag")
        ]
    )
]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);