module.exports = function (grunt) {
    
    grunt.initConfig({  
        frename: {
            a: [
                'wwwroot/vendor/**'
            ],
            b: [
                'wwwroot/fonts/**',
            ],   
            options: {
                force: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-file-rename');
    grunt.registerTask('test', ['frename:a', 'frename:b']);
};