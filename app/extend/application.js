module.exports = {
  getInstancesByAppId(appId) {
    // copy from eureka-js-client
    if (!appId) {
      throw new RangeError('Unable to query instances with no appId');
    }
    const instances = this.cachedEurekaApp[appId.toUpperCase()] || [];

    if (instances.length === 0) {
      this.logger.warn('[egg-eureka] Unable to retrieve instances for appId: ' + appId);
    }

    return instances;
  },
};