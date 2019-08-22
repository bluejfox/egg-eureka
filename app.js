'use strict';

module.exports = app => {
  app.messenger.on('registryUpdated', apps => {
    app.cachedEurekaApp = apps;
  });
};
