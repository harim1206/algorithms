const fetch = require('node-fetch');

function promiseAll(promises) {
  const outputs = [];
  let settledPromiseCounter = 0;

  return new Promise((resolve, reject) => {

    promises.forEach((promise, i) => {

      promise.then(value => {
        outputs[i] = value
        settledPromiseCounter++
        if(settledPromiseCounter === promises.length) {
          resolve(outputs)
        }
      })
      .catch(reject)

    })

  })

}

const promises = [
  fetch('https://swapi.dev/api/people/1/'),
  fetch('https://swapi.dev/api/people/2/'),  
  fetch('https://swapi.dev/api/people/3/'),  
]

promiseAll(promises)
.then( outputs => promiseAll(outputs.map(r => r.json())) )
.then( outputs => console.log('outputs: ', outputs))

// Promise.all([fetch1, ... fetchX])
//   .then(results => Promise.all(results.map(r => r.json())) )
//   .then(results => { You have results[0, ..., X] available as objects })

// fetch('https://swapi.dev/api/people/1/').then(res=>{
//   console.log('res: ', res)
//   return res.json()
// })
// .then(data => {
//   console.log('data: ', data)
// })


/*
// get file example
const fs = require('fs');

const getFile = fileName => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err); // calling `reject` will cause the promise to fail with or without the error passed as an argument
        return; // and we don't want to go any further
      }
      resolve(data);
    });
  });
};
  
function getPromise(URL) {
  return new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open("GET", URL);
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response); // req.response => response variable in .then() below
      } else {
        reject("There is an Error!");
      }
    };
    req.send();
  });
}

getPromise('www.google.com')
.then(response => response)

function fetch(url) {
  return new Promise((resolve, reject) => {
    resolve('hello')
  })
}

fetch('test')
.then(res => console.log('res: ', res)) // res is 'hello'

// The arg in resolve(arg), is the arg in .then(arg => arg)

*/