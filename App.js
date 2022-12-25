// Hello World using React

const headingReact = React.createElement(
  "h1",
  { id: "title" },
  "Hello World using React"
);
console.log(headingReact);
const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(headingReact);

/*Complex HTML structure using React
     <div id = "container">
        <h1 id = "heading1" > Heading1 </h1>
        <h2 id = "heading2" > Heading2 </h2>
     </div>
 -->*/

const headingOne = React.createElement("h1", { id: "heading1" }, "Heading1");
console.log(headingOne);
const headingTwo = React.createElement("h2", { id: "heading2" }, "Heading2");
console.log(headingOne);
const container = React.createElement("div", { id: "container" }, [
  headingOne,
  headingTwo,
]);
const rootReactComplex = ReactDOM.createRoot(document.getElementById("root"));
rootReactComplex.render(container);
