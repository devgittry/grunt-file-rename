/*
 * grunt-file-rename
 * https://github.com/devgittry/grunt-file-rename
 *
 * Copyright (c) 2016 devgittry
 * Licensed under the MIT license.
 * https://github.com/devgittry/grunt-file-rename/blob/master/LICENSE
 *
 */
 
'use strict';
 
module.exports = function(grunt) {
	grunt.registerMultiTask('frename', 'Rename file', function() {
		var options = this.options({
      		force: false
    	});

    	grunt.verbose.writeflags(options, 'Options');
	});
};
