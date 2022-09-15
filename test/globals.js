const path = require('path');

const { removeVirtualTest } = require('vite-plugin-nightwatch/utils');

const vite = require('../lib/vite.js');

let viteServer;
module.exports = {
  async before() {
    viteServer = await vite.start({
      configFile: path.join(__dirname, '../vite.config.js')
    });

    const port = viteServer.config.server.port;

    this.launchUrl = `http://localhost:${port}`;
  },

  async after() {
    await viteServer.close();

    await removeVirtualTest();
  }
}