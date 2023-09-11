// string
// number
// null
// boolean
// undefined
// BigInt
// Symbol

// {}
// []
// function

const x = 100;

// x = 101;

const character = {
  name: "Rick",
  isDead: false,
};

const dead = structuredClone(character);

dead.isDead = true;

character.name = "morty";

console.log(character.isDead);
