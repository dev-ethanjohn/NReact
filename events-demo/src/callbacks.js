const heroes = ["Ironman", "Superman", "Nader"];

function exclaim(str) {
  return str + "!";
}

// const exclaimedHeroes = heroes.map((hero) =>
//   // return hero + "!";
//   exclaim(hero)
// );

// NOTE: SHORTHAND -> we are passing a callback/handle
// const exclaimedHeroes = heroes.map(exclaim);

const exclaimedHeroes = heroes.map(exclaim);

console.log(exclaimedHeroes);
