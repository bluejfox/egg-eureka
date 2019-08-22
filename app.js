'use strict';

module.exports = app => {
  app.messenger.on('registryUpdated', apps => {
    console.log('registryUpdated', apps);
    app.cachedEurekaApp = apps;
  });
};
