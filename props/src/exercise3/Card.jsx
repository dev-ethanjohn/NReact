import Button from "./Button.jsx";

function Card({ cardText, buttonText, handleClick }) {
  return (
    <>
      <h2>{cardText}</h2>
      <Button text={buttonText} handleClick={handleClick} />
    </>
  );
}

export default Card;
