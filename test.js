const expect  = require('chai').expect;
const request = require('request');
const fs = require('fs');

const strangerThings = require('./strangerThings');
const mochEpisodesData = JSON.parse(fs.readFileSync('./moch-episode-data.json'));
const mochCleanedData = require('./moch-cleaned-data');

it('Main page content', (done) => {
    // must run server locally to pass test
    request('http://localhost:8080' , (error, response, body) => {
        expect(body).to.equal('Welcome!');
        done();
    });
});

describe('strangerThings.js tests', () => {
    it('refineEpisodeData should return the correct cleaned data', () => {
        expect(strangerThings.refineEpisodeData(mochEpisodesData)).to.equal(mochCleanedData);
    });
})