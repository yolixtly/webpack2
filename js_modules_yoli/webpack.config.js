const path = require('path');
/*
Instructions to run Webpack
*/ 
const config = {
	//This is the entry point, from here webpack will start bundling 
	entry: './src/index.js',
	//Reads as: whenever webpack runs, save the file, call it bundle.js inside of a path of our project directory in a file called build 
	output: {
		//where the bundle will be stored -> it must be absolute path from the root directory of the hard drive  
		path: path.resolve(__dirname, 'build'), //reference to the current working directory
		//the name of the bundle 
		filename: 'bundle.js'
	}
};

module.exports = config;