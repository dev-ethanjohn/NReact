// import "./App.css";
import Card from "./Card.jsx";

function App() {
  return (
    <>
      <h1>hello</h1>
      {/* <Paragraph message="Moo" /> */}

      {/* {Paragraph("Moo")} */}
      {/* ❗ Calling Paragraph() directly bypasses React’s virtual DOM and won’t track state, lifecycle methods, or effects. */}

      {/* NOTE: Using prop drilling */}
      <Card fname={"Ethan John"} lname={"Paguntalan"} />
    </>
  );
}

export default App;
