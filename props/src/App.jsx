// import "./App.css";
// import Section from "./exercise1/Section.jsx";
import Paragraph from "./bonus/Paragraph.jsx";

function App() {
  return (
    <>
      {/* <h1>hello</h1> */}
      {/* <Paragraph message="Moo" /> */}
      {/* {Paragraph("Moo")} */}
      {/* ❗ Calling Paragraph() directly bypasses React’s virtual DOM and won’t track state, lifecycle methods, or effects. */}
      {/* NOTE: Using prop drilling */}
      {/* <Card fname={"Ethan John"} lname={"Paguntalan"} /> */}
      {/* IMPORTANT: Exercises */}
      {/* NOTE: warmup */}
      {/* <Section /> */}
      {/* NOTE: exercise1 */}
      {/* <Section /> */}
      {/* NOTE: exercise2 */}
      {/* <Section /> */}
      {/* NOTE: exercise3 */}
      {/* <Profile
        profileText="Ethan John"
        cardText="This is a card text"
        buttonText="This is a button text"
      /> */}
      {/* NOTE: BONUS */}
      <Paragraph>
        <h1>BONUS</h1>
        <input type="text" placeholder="name" />
      </Paragraph>
    </>
  );
}

export default App;
