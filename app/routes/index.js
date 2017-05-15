const noteRoutes = require('./note_routes');
module.exports = function(app, db) {
  app.post('/notes', (req, res) => {
    console.log(req.body)
    res.send('Hello')
  });
};
