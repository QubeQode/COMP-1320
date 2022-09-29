let season = 'fall';

const printSeason = (season) => {
    // (season === 'summer') ? `It's ${season}!` : `It is ${season}.`;
    if (season === 'summer') {
        console.log(`It's ${season}!`);
    }
    console.log(`It is ${season}.`);
}

printSeason(season);