// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import People from "./People";

function App() {
  // IMPORTANT! LESSON
  // return (
  //   // these empty tags are React Fragments / empty nodes(this removes unnessary divs unless we need to style a div)
  //   <>
  //     {/* Comment inside JSX */}
  //     <h1>Hello! 🔥</h1>
  //     <p>Hi!</p>
  //   </>
  // );
  // // NOTE: only 1 returned expression, a multiline return will be ignored
  // RETURNING AN array
  // const str = "monkey";
  // const num = 1227;
  // // this is block element
  // const p = <p>This is awesome! {str}</p>;
  // const arr = ["one", "two", "threee"];
  // // return [str, num, p, arr];
  // return arr.map((item) => <h1>{item}</h1>);
  // IMPORTANT: warmup
  // return (
  //   <>
  //     <ul>
  //       <li>Home</li>
  //       <li>Projects</li>
  //       <li>Contact</li>
  //     </ul>
  //   </>
  // );
  // IMPORTANT: exercise1
  // return (
  //   <>
  //     <h1>Hello</h1>
  //     <img
  //       // src="./assets/starfish.jpeg"
  //       src={starFish}
  //       alt="Starfish on a girl's hand on the beach"
  //     />
  //   </>
  // );
  // IMPORTANT: exercise2
  // return <Card />;
  // IMPORTANT: exercise3
  // return <Cars />;
  // IMPORTANT: bonus
  return <People />;
}

export default App;
