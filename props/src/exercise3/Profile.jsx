import Card from "./Card.jsx";

function Profile({ profileText, cardText, buttonText }) {
  function handleClick() {
    console.log("It works");
  }

  return (
    <>
      <h1>{profileText}</h1>
      <Card
        cardText={cardText}
        handleClick={handleClick}
        buttonText={buttonText}
      />
    </>
  );
}

export default Profile;
