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
                    'public/css/app.css': 'public/scss/application.scss'
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'public/css/app.min.css': 'public/css/app.css',
                    'public/css/main.min.css': 'public/css/main.css',
                    'public/css/animate.min.css': 'public/css/animate.css'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: ['public/scss/*.scss'],
                tasks: ['sass']
            },
            styles: {
                files: ['public/css/*.css'],
                tasks: ['cssmin']
            },
            files: ['public/**'],
            tasks: ''
        },
        express: {
            all: {
                options: {
                    port: 3000,
                    hostname: 'localhost',
                    bases: ['./public'],
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
