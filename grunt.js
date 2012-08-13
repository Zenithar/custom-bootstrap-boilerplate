module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    recess : {
      dist: {
        src: ['custom/theme.less'],
        dest: 'dist/theme.css',
        options: {
          compile: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-recess');

    // Default task.
  grunt.registerTask('default', 'recess');
};