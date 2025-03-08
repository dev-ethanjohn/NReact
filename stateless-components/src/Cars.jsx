// 3. Make a Cars function inside this that has a regular
//    Javascript Array of 5 different car brands (Strings)

// 4. How would you make the jsx to return a paragraph tag
//    with the car brand as text inside each one (5 tags)?

function Cars() {
  const cars = ["Nissan", "Toyota", "Honda", "Mitsubishi", "Jaguar"];

  const carList = cars.map((car) => <p key={car}>{car}</p>);

  return (
    <>
      {/* note: {} wraps the map which is an expression */}
      {carList}
    </>
  );
}

export default Cars;
