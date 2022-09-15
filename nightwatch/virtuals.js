exports.default = [
  {
    name: (exportName) => `"${exportName}" should not fail`,
    filter: /\.stories\.[jt]sx$/,
    createTest: ({ publicUrl, exportName }) => async (browser) => {
      const component = await browser.mountReactComponent({ path: publicUrl, exportName });

      await browser.expect.element(component).to.be.visible;

      return { component };
    }
  },
	{
		name: (exportName) => `"${exportName}" should render`,
		filter: /\.[jt]sx$/,
		createTest: ({ publicUrl, exportName }) => async (browser) => {
			const component = await browser.mountReactComponent({ path: publicUrl, exportName });

			await browser.expect.element(component).to.be.visible;
		}
	}
];