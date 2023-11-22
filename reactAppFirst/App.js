const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "my name is Umair Zafar"),
    React.createElement("p", {}, "This is paragrapg"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", {}, "my name is Owais"),
    React.createElement("p", {}, "This is Paragraph 2"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// const heading = React.createElement(
//     "h2",
//     { id: "heading" },
//     "check my name is Umair Zafar and further continue"
//   );
