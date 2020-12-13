module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    // "@storybook/addon-links",
    {
    	name: "@storybook/addon-essentials",
    	options: {
    		docs: false,
    		backgrounds: false,
    		globals: false,
    		toolbar: false,
    		viewports: false
    	}},
    "@storybook/preset-create-react-app"
  ]
}