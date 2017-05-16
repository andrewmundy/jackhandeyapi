var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {
  app.get('/quotes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('quotes').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });
app.post('/quotes', (req, res) => {
    const quote = { text: req.body.body, title: req.body.title };
    db.collection('quotes').insert(quote, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
app.delete('/quotes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('quotes').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('quote ' + id + ' deleted!');
      }
    });
  });
app.put('/quotes/:id', (req, res) => {
  const id = req.params.id;
  const details = { '_id': new ObjectID(id) };
  const quote = { text: req.body.body, title: req.body.title };
  db.collection('quotes').update(details, quote, (err, result) => {
    if (err) {
        res.send({'error':'An error has occurred'});
    } else {
        res.send(quote);
    }
  });
});

};
