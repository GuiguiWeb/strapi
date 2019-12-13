'use strict';

module.exports = {
  async getConnections(ctx) {
    ctx.send({
      connections: Object.keys(
        strapi.config.currentEnvironment.database.connections
      ),
    });
  },
};
