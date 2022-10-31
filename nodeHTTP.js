"use strict";

const fs = require("fs");
const https = require("https");

function getMovieList(year) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/movies?Year=<year>

  return new Promise((resolve, reject) => {
    const req = https
      .get("https://jsonmock.hackerrank.com/api/movies?Year=2015", (res) => {
        let body = "";
        console.log("res.statusCode", res.statusCode);

        res.on("data", function (chunk) {
          body += chunk;
        });

        res.on("end", function () {
          var data = JSON.parse(body);
          resolve(data);
          console.log("Got a response: ", data);
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

getMovieList();
