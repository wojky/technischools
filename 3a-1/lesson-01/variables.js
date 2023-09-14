// deklarowanie zmiennych

// var, let, const
// var - deprecated?

function foo() {
  var fname = "kamil";
}

if (true) {
  var fname = "adam";
}

// let, const zasieg blokowy
// var funkcyjny

const magicNumber = 100;

const dev = {
  name: "adam",
};

dev.name = "natalia";

const anotherDev = dev;

anotherDev.name = "kacper";

console.log(anotherDev);
console.log(dev);
