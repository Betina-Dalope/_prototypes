#!/usr/bin/env node
const fetch = require('node-fetch');
const fs = require('fs');
const apiPaths = require('./api/apiPaths');

const writeJsonToFile = function(filePath, jsonData) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, JSON.stringify(jsonData, null, 4), err => {
      if (err) {
        console.log('Error updating ' + filePath);
        reject(err);
      }
      console.log('\x1b[32m', 'File Updated: ' + filePath, '\x1b[0m');
      resolve(jsonData);
    });
  });
};

// Request json and write to local file.
const drupalToLocalJSON = (src, destination) => {
  return fetch(src)
    .then(res => {
      return res.json();
    })
    .then(json => {
      return writeJsonToFile(destination, json);
    })
    .catch(err => {
      console.log('Error creating local JSON content files.');
      throw err;
    });
};

// Update all json content
Promise.all(apiPaths.map(d => drupalToLocalJSON(d.src, d.destination)))
  .then(json => {
    console.log('\x1b[32m', 'Big Tree Content downloaded', '\x1b[0m');
    return json;
  })
  .catch(err => {
    console.log('Error downloading CMS JSON content.');
    console.log(err);
    throw err;
  });