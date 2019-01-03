/** fetches a json, defaults to pages.json */
module.exports = function( items ) {
    return fn(require(__dirname + '/../data/items.json'));
  };