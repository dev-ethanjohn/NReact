// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import Button from "./Button";
// import Input from "./Input";
// import Grades from "./Grades";
import ContactForm from "./ContactForm";

function App() {
  // function handleClick(e, string) {
  //   console.log(e);
  //   console.log(`Name: ${string}`);
  // }
  // // return <p onClick={handleClick}>Gello</p>;
  // //NOTE:  if you need to pass arguments:
  // return <p onClick={(e) => handleClick(e, "Ethan")}>Gello</p>;
  //IMPORTANT: EXERCISES
  // NOTE: warmup
  // return <Button />;
  // NOTE: exercise1
  // return <Input />;
  // NOTE: exercise2
  // return <Grades />;
  // NOTE: exercise3
  return <ContactForm />;
}

export default App;

// NOTE:
// onClick={handleClick} → Passes the function reference (correct usage for event handlers).
// onClick={handleClick()} → Immediately calls handleClick() during render (incorrect for event handling).
