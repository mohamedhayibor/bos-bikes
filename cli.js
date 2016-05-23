#!/usr/bin/env node
'use strict';
const meow = require('meow');
const request = require('request');

const api = 'http://query.yahooapis.com/v1/public/yql?
q=select%20*%20from%20xml%20where%20url%3D%22http%3A%2F%2Fwww.thehubway.com
%2Fdata%2Fstations%2FbikeStations.xml%22&format=json';

const cli = meow(`
  Usage:
    bikes <station>

    or
    bikes (to get list of stations id, name)
    
    -v/--version    Print version
    -h/--help       Print help
  `, {
    alias: {
      v: 'version',
      h: 'help'
    },
    string: ['_']
});

// ********** General queries --help, version
// at bikes --help > all ids and name should be diffed
const query = cli.input.join(' ');
query = query.toLowerCase().trim();

let rawData;
let stations;

request(api, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    process.stdout.write('------- async call successfully made');
    rawData = JSON.parse(body);


    stations = rawData.query.results.stations.station;
    // console.log( stations ) > currently parsing and working
    // if station is empty automatically render list of id and respective names
    if (query.length < 1) {
      process.stdout.write(`
  --- List of all station's names and ids ---
  --- current Time ${ new Date() } ---
        `);

      stations.forEach( station => {
        process.stdout.write(`
  id: ${ station.id } - station: ${ station.name }
          `);
      })
    } else {
      // no need to coece query into a number === is enough
      let result = stations.filter( station => station.id === query );

      process.stdout.write(`
  Station: ${ result.name } - n. bikes: ${ result.nbBikes }
                            - n. docks: ${ result.nbEmptyDocks }
        `);

      process.stdout.write(`Have a nice ride and be safe!`);
      process.exit(1)
    }
  }
})




// specific queries - station by id
// at any command an api call should be made
