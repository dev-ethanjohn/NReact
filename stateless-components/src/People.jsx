//  3. Make a People function inside this that has a regular
//      Javascript Array, each with an Object, where each
//      Object has 2 keys: name and age

//   4. Create at least 3 of these "People" Objects in the
//      Array to use

//   5. How would you make the jsx to return an <h1> with the name
//      of the person, with a <p> tag below for the age of each
//      person for each person in the Array you created?

function People() {
  const people = [
    { name: "Ethan John", age: 24 },
    { name: "Jason", age: 12 },
    { name: "Kelly", age: 23 },
  ];

  const peopleList = people.map((person) => {
    return (
      // NOTE: use div if we want additional styling or if it requires props like `key`, `className` or `id`. Use regular <></> React fragments for simple use cases
      <div key={person.name}>
        <h1>{person.name}</h1>
        <p>{person.age}</p>
      </div>
    );
  });

  return <>{peopleList}</>;
}

export default People;
