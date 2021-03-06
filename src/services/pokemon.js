export async function getAllPokemon(url) {
   // return fetch(url).then(res => res.json()).then(data => data)
   return new Promise((resolve, reject) => {
      fetch(url)
         .then((res) => res.json())
         .then(data => {
            resolve(data);
         });
   });
}

export async function getPokemonData(url) {
   return new Promise((resolve, reject) => {
      fetch(url)
         .then((res) => res.json())
         .then(data => {
            resolve(data);
         });
   });
}

export async function getOnePokemon(url) {
   return new Promise((resolve, reject) => {
      fetch(url)
         .then((res) => res.json())
         .then(data => {
            resolve(data);
         });
   });
}