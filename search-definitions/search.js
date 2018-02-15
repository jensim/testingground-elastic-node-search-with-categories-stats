var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});

client.ping({
    // ping usually has a 3000ms timeout
    requestTimeout: 1000
}, function (error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
        process.exit(1);
    } else {
        console.log('All is well');
    }
});

/**
 * Builds a result based on the base.json search and the defined categories searches,
 * listing the uncategorized searches as well
 * @param directory
 * @returns {Promise<[any , any , any]>}
 */
function executeSearch(directory) {
    let base = searchByFromFile(directory + '/base.json')
    let categories = searchByDirectoryName(directory + '/category-categories')
    return Promise.all([base, categories])
        .then((values) => buildResult(values[0], values[1]))
}

/**
 * TODO
 */
function searchByFromFile(fileName) {
    return new Promise(function () {
        return []
    })
}

/**
 * TODO
 */
function searchByDirectoryName(folderName) {
    return new Promise(function () {
        return []
    })
}

/**
 * TODO
 */
function getSearchObjectFromFiles(fileNames) {
    return new Promise(function () {
        return []
    })
}

/**
 * TODO
 */
function buildResult(baseSearchResult, inclusiveSearchResult) {
    return new Promise(function () {
        return {}
    })
}

/**
 * TODO: Return a list of searchIDs
 */
function singleSearch(searchTerms) {
    client.search({
        q: 'pants'
    }).then(function (body) {
        return body.hits.hits;
    }, function (error) {
        console.trace(error.message);
        return []
    });
}

module.exports = executeSearch;
