import Profile from "./Profile";

function Card({ fname, lname }) {
  return (
    <>
      <h1>
        {fname} {lname}
      </h1>
      {/* <Profile fname={fname} lname={lname} /> */}
      {/* NOTE: YOU can rename the prop attributes */}
      <Profile firstN={fname} lastN={lname} />
    </>
  );
}

export default Card;
