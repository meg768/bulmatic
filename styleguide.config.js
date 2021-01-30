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
	
    require: ['./styleguide.css']

  
};



