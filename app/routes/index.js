const quoteRoutes = require('./quote_routes');
module.exports = function(app, db) {
  quoteRoutes(app, db);
};
