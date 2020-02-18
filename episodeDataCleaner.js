module.exports = {
    totalDurationInSeconds: (episodes) => {
        const totalTimeInSeconds = episodes.reduce((totalSeconds, currentEpisode) => {
            return totalSeconds += currentEpisode.runtime*60;
        }, 0);
        return totalTimeInSeconds;
    },
    averageEpisodesPerSeason: (episodes) => {
        const averageEpisodesPerSeason = episodes.reduce((averageEpisodes, currentEpisode, currentIndex) => {
            let episodeCount = currentIndex;
            let seasonCount = 0;
            (currentEpisode.season > seasonCount) ? seasonCount = currentEpisode.season : null;

            return averageEpisodes = Math.round(episodeCount/seasonCount * 10)/10;
        }, 0);
        return averageEpisodesPerSeason;
    },
    episodeData: (episodes) => {
        const refinedEpisodeData = episodes.reduce((refinedEpisode, currentEpisode) => {
            let timeStamp = (currentEpisode.airstamp !== '') ? currentEpisode.airstamp : null;
            let summary = (currentEpisode.summary !== null) ? currentEpisode.summary.split('.')[0].split('>')[1] : null;

            cleanEpisode = {
                [currentEpisode.id]: {
                    sequenceNumber: `s${currentEpisode.season}e${currentEpisode.number}`,
                    shortTitle: currentEpisode.name.split(': ')[1],
                    airTimestamp: timeStamp,
                    shortSummary: summary
                }
            }
            refinedEpisode = {...refinedEpisode, ...cleanEpisode}
            return refinedEpisode
        }, {});
        return refinedEpisodeData;
    },
}