const findRoutes = require('./find_routes');
const updateRoutes = require('./update_routes');
const deleteRoutes = require('./delete_routes');

module.exports = (app, db) => {
  findRoutes(app, db);
  updateRoutes(app, db);
  deleteRoutes(app, db);
};
