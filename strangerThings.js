const fetch = require('node-fetch');
const fs = require('fs');
const episodeDataCleaner = require('./episodeDataCleaner');
const util = require('util');

const mochEpisodesData = JSON.parse(fs.readFileSync('./moch-episode-data.json'));
const baseUrl ='http://api.tvmaze.com/singlesearch/shows?q=stranger-things&amp;embed=episodes';

const getEpisodeData = (async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // this is where to pass the response data if it was working correctly.
        refineEpisodeData(mochEpisodesData);
    } catch (error) {
        console.log(error);
    }
})(baseUrl);

const refineEpisodeData = (episodesData) => {
    const { episodes } = episodesData._embedded
    refinedData = {
        [episodesData.id]: {
            totalDurationSec: episodeDataCleaner.totalDurationInSeconds(episodes),
            averageEpisodesPerSeason: episodeDataCleaner.averageEpisodesPerSeason(episodes),
            episodes: episodeDataCleaner.episodeData(episodes)
        }
    }
    return refinedData;
}

console.log(util.inspect(refineEpisodeData(mochEpisodesData), false, null, true /* enable colors */))

module.exports = {
    getEpisodeData,
    refineEpisodeData
}