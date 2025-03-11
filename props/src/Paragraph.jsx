// function Paragraph(props) {
//   console.log(props);
//   return <p>Hello {props.message}</p>;
// }

// Using destructuring (recommended)
function Paragraph({ message }) {
  console.log(message);
  return <p>Hello {message}</p>;
}
export default Paragraph;
