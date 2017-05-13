// Created by Ted to use as basis for future Gruntfile Template

// All the grunt settings live in this object, within this function.
module.exports = function(grunt) {
    grunt.initConfig({
        // this line would allow us to read settings from the package.json file, according to Grunt
        // pkg: grunt.file.readJSON('package.json'),

        // Settings for jshint
        jshint: {
         // define the files to lint
            files: ['Gruntfile.js', '../*.js'],
  // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
    // more options here if you want to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                },
                esnext: true
            }
        },
        // Settings for Watch
        watch: {
          javascripts: {
            files: ['../*.js'],
            tasks: ['jshint']
          }
        }

    });
    // (End of initConfig)

    // Load the grunt plugins needed (which all should have been previously installed via NPM)
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Specify the default tasks which can be run just by typing "grunt" on the command line
    grunt.registerTask('default', ['jshint', 'watch']);
};