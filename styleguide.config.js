const Path = require('path');
const source = './src/components';

function getComponents() {

	var childProcess = require('child_process');
	var files = childProcess.execSync(`ls -1 -r ${source}/*/*.js | sort`).toString().trim().split('\n');

	return files;
} 

module.exports = {

    usageMode: 'expand',
    skipComponentsWithoutExample: false,
	components: getComponents(),

	moduleAliases: {
        'bulmatic': Path.resolve(__dirname, `src/index.js`),
        'fontawesome': Path.resolve(__dirname, `src/fontawesome.js`)
	},


	styles: function styles(theme) {
		return {
			Playground: {
				preview: {
					paddingLeft: 0,
					paddingRight: 0,
					borderWidth: [[0, 0, 1, 0]],
					borderRadius: 0,
				},
			},
			Code: {
				code: {
					paddingLeft: 0,
					paddingRight: 0,
					// make inline code example appear the same color as links
					color: theme.color.link,
					fontSize: 14,
				},
			},
		};
	},
	
    require: ['./styleguide.css']

  
};



