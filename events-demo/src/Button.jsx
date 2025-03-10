// 2. Create a Button.jsx file that has a component
//      that returns a <button /> with "Click Me!" text
//      in it

//   3. Make it so that when you click on the button
//      "Hello there!" gets logged out to the console

function Button() {
  const loggedMessage = (msg) => {
    console.log(msg);
  };

  return (
    <button onClick={() => loggedMessage("Hello there!")}>Click Me!</button>
  );
}

export default Button;
