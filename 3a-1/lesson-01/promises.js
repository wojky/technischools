// fetch('https://rickandmortyapi.com/api/character').then((response) => {
//     // sukces
// });

async function iAmAsync() {
  return 5;
}

function iAmOldScholl() {
  return Promise.resolve(5);
}

iAmAsync().then((res) => {
  console.log(res);
});
