const app = require('./app');
app.set('port', process.env.PORT || 7080);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});