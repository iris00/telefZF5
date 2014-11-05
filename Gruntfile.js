'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        app: 'app',
        dist: 'dist',

        sass: {
            options: {
                includePaths: ['<%= app %>/bower_components/foundation/scss'],
            },
            dist: {
                options: {
                    outputStyle: 'extended',
                    sourceMap: true
                },
                files: {
                    '<%= app %>/css/app.css': '<%= app %>/scss/app.scss'
                }
            }
        },

        // browserSync: {
        //     app: {
        //         bsFiles: {
        //             src : 'css/*.css'
        //         },
        //         options: {
        //             watchTask: true,
        //             proxy: '10.47.25.193', 
        //         }
        //     }
        // },

        // webfont: {
        //     icons: {
        //         src: '../icons/*.svg',          //Ruta de los svg que van hacer convertidos
        //         dest: '../fonts',           //Ruta de destino de la compilación
        //         destCss: '../fonts/build',          //Ruta de destino donde se creará la hoja de estilos css y un html ejemplo
        //         options: {
        //             stylesheet: 'css',      //Extensión de la hoja de estilos, css
        //             relativeFontPath: '../fonts'    //La ruta del src - font-family que se imprime dentro de la hoja de estilos
        //         }
        //     }
        // }

        // jshint: {
        // 	options: {
        // 		jshintrc: '.jshintrc'
        // 	},
        // 	all: [
        // 		'Gruntfile.js',
        // 		'<%= app %>/js/**/*.js'
        // 	]
        // },

        clean: {
            dist: {
                src: ['<%= dist %>/*']
            },
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= app %>/',
                    src: ['fonts/**', '**/*.html', '**/*.png', '!**/pruebas/**', '!**/*.scss', '!bower_components/**'],
                    dest: '<%= dist %>/'
                }, {
                    expand: true,
                    flatten: true,
                    src: ['<%= app %>/bower_components/font-awesome/fonts/**'],
                    dest: '<%= dist %>/fonts/',
                    filter: 'isFile'
                }]
            },
        },

        imagemin: {
            target: {
                files: [{
                    expand: true,
                    cwd: '<%= app %>/images/',
                    src: ['**/*.{jpg,gif,svg,jpeg,png}'],
                    dest: '<%= dist %>/images/'
                }]
            }
        },

        uglify: {
            options: {
                preserveComments: 'some',
                mangle: false
            }
        },

        useminPrepare: {
            html: ['<%= app %>/index.html'],
            options: {
                dest: '<%= dist %>'
            }
        },

        usemin: {
            html: ['<%= dist %>/**/*.html', '!<%= app %>/bower_components/**'],
            css: ['<%= dist %>/css/**/*.css'],
            options: {
                dirs: ['<%= dist %>']
            }
        },

        watch: {
            grunt: {
                files: ['Gruntfile.js'],
                tasks: ['sass']
            },
            sass: {
                files: '<%= app %>/scss/**/*.scss',
                tasks: ['sass']
            },
            livereload: {
                files: ['<%= app %>/**/*.html', '!<%= app %>/bower_components/**', '<%= app %>/js/**/*.js', '<%= app %>/css/**/*.css', '<%= app %>/images/**/*.{jpg,gif,svg,jpeg,png}'],
                options: {
                    livereload: true
                }
            }
        },

        connect: {
            app: {
                options: {
                    port: 9000,
                    base: '<%= app %>/',
                    open: true,
                    livereload: true,
                    //hostname: '127.0.0.1'
                    hostname: '10.47.25.193'
                }
            },
            dist: {
                options: {
                    port: 9001,
                    base: '<%= dist %>/',
                    open: true,
                    keepalive: true,
                    livereload: false,
                    //hostname: '127.0.0.1'
                    hostname: '10.47.25.193'
                }
            }
        },

        wiredep: {
            target: {
                src: [
                    '<%= app %>/**/*.html'
                ],
                exclude: [
                    'modernizr',
                    'font-awesome',
                    'jquery-placeholder',
                    'jquery.cookie',
                    'foundation'
                ]
            }
        }

    });


    grunt.registerTask('compile-sass', ['sass']);
    grunt.registerTask('bower-install', ['wiredep']);

    // grunt.loadNpmTasks('grunt-webfont');

    // grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['compile-sass', 'bower-install', 'connect:app', 'watch'/*, 'browserSync'*/]);
    // grunt.registerTask('validate-js', ['jshint']);
    grunt.registerTask('server-dist', ['connect:dist']);

    grunt.registerTask('publish', ['compile-sass', 'clean:dist', /* 'validate-js',*/ 'useminPrepare', 'copy:dist', 'newer:imagemin', 'concat', 'cssmin', 'uglify', 'usemin'
    ]);
};
