// import { magicNumber as xyz } from "./modules";

fetch("http://api.nbp.pl/api/cenyzlota1")
  .then((response) => {
    console.log(response);

    return response.json();
  })
  .then((response) => {
    console.log(response);

    fetch("http://api.nbp.pl/api/exchangerates/rates/a/chf/")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
      });
  })
  .catch((err) => {
    console.log(err);
  });

Promise.allSettled([
  fetch("http://api.nbp.pl/api/cenyzlota").then((response) => {
    console.log(response);

    return response.json();
  }),
  fetch("http://api.nbp.pl/api/exchangerates/rates/a/chf/").then((response) => {
    return response.json();
  }),
]).then((response) => {
  console.log("z promise all", response);
});
