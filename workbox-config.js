module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,svg,html,png,txt,css,js,jpg}'
	],
	// ignoreURLParametersMatching: [
	// 	/^utm_/,
	// 	/^fbclid$/
	// ],
	swDest: 'build/sw.js',
	swSrc: 'src/sw-template.js'
};