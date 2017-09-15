module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    // compass: true
                },
                files: {
                    'docs/css/app.css': 'docs/scss/application.scss'
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'docs/css/app.min.css': 'docs/css/app.css',
                    'docs/css/main.min.css': 'docs/css/main.css',
                    'docs/css/animate.min.css': 'docs/css/animate.css'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: ['docs/scss/*.scss'],
                tasks: ['sass']
            },
            styles: {
                files: ['docs/css/*.css'],
                tasks: ['cssmin']
            },
            files: ['docs/**'],
            tasks: ''
        },
        express: {
            all: {
                options: {
                    port: 3000,
                    hostname: 'localhost',
                    bases: ['./docs'],
                    livereload: true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('server', ['sass', 'cssmin', 'express', 'watch']);
};
