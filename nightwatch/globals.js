const fs = require('fs');
const path = require('path');

const setup = require('../lib/setup.js');
const { removeVirtualTest } = require('vite-plugin-nightwatch/utils');

let viteServer;
const projectConfigFile = path.join(process.cwd(), 'vite.config.js');
const viteConfigFile = path.join(__dirname, '../vite.config.js');

const hasProjectConfigFile = () => {
  try {
    return fs.statSync(projectConfigFile).isFile();
  } catch (err) {
    return false;
  }
}

module.exports = {
  async before() {
    viteServer = await setup({
      viteConfigFile: hasProjectConfigFile() ? projectConfigFile : viteConfigFile
    });

    // This will make sure the launch Url is set correctly when mounting the React component
    this.launchUrl = this.baseUrl = `http://localhost:${viteServer.config.server.port}`;
  },

  async after() {
    await viteServer.close();

    await removeVirtualTest();
  }
}