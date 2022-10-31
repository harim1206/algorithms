const fetch = require('node-fetch');
const promises = [
  fetch('https://swapi.dev/api/people/1/'),
  fetch('https://swapi.dev/api/people/2/'),
  fetch('https://swapi.dev/api/people/3/'),
];

async function getData() {
  // const [data, error] = await asyncFn(fetch('https://swapi.dev/api/people/1/'));

  const data = await fetch('').catch((error) => {
    console.log('error: ', error);
    throw new Error('hello');
  });
  console.log('data; ', data);
  // return [data, error];
}

async function asyncFn(promise) {
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    return [null, error];
  }
}

console.log(getData());
