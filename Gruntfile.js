/*

Available grunt commands

$ grunt watch:assets     # Copy images inside frontsize/themes/default/img into production images folder
$ grunt watch:frontsize  # Compiles Frontsize
$ grunt watch:frnAssets  # Compiles Frontsize and copy images
$ grunt watch:autoprefix # Compiles Frontsize using Autoprefixer and disabling Frontsize prefixes
$ grunt watch:autoAssets # Compiles Frontsize using Autoprefixer disabling Frontsize prefixes and copy images
$ grunt watch:all        # Performs assets, frontsize and autoprefix tasks

$ grunt assets           # Copy images inside frontsize/themes/default/img into production images folder
$ grunt frontsize        # Compiles Frontsize
$ grunt frnAssets        # Compiles Frontsize and copy images
$ grunt autoprefix       # Compiles Frontsize using Autoprefixer and disabling Frontsize prefixes
$ grunt autoAssets       # Compiles Frontsize using Autoprefixer disabling Frontsize prefixes and copy images
$ grunt all              # Performs assets, frontsize and autoprefix tasks

*/

'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        f : grunt.file.readJSON('frontsize.json'),

        sass : {
            production : {
                options : {
                    sourcemap : 'auto',
                    cleancss : false,
                    style : 'expanded'
                },
                files : {
                    '<%= f.css %>' : '<%= f.compile %>'
                }
            },
            autoprefixer : {
                options : {
                    sourcemap : 'auto',
                    cleancss : false,
                    style : 'expanded'
                },
                files : {
                    '<%= f.autoprefixerCss %>' : '<%= f.compile %>'
                }
            },
            test : {
                options : {
                    cleancss : false,
                    style : 'expanded'
                },
                files : {
                    '<%= f.testCss %>' : '<%= f.compileTest %>'
                }
            }
        },

        autoprefixer: {
              options: {
                    // browsers: ['> 1%', 'Firefox > 3.6', 'last 10 versions', 'ie 8', 'ie 7', 'Firefox ESR', 'Opera > 10.1'],
                    diff: true
              },
              test: {
                    src  : '<%= f.autoprefixerCss %>',
                    dest : '<%= f.autoprefixerCss %'
              }
        },

        watch: {
            options : {
                atBegin : true
            },
            frontsize : {
                files: [ '*.scss', '**/*.scss' ],
                tasks: [ 'frontsize' ]
            },
            frnAssets : {
                files: [ '*.scss', '**/*.scss' ],
                tasks: [ 'frnAssets' ]
            },
            devAssets : {
                files: [ '*.scss', '**/*.scss' ],
                tasks: [ 'devAssets' ]
            },
            autoprefix : {
                files: [ '*.scss', '**/*.scss' ],
                tasks: [ 'autoprefix' ]
            },
            autoAssets : {
                files: [ '*.scss', '**/*.scss' ],
                tasks: [ 'autoAssets' ]
            },
            all : {
                files: [ '*.scss', '**/*.scss' ],
                tasks: [ 'all' ]
            }
        },

        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            test: {
                options: {
                    csslintrc: '.csslintrc'
                },
                src: [ '<%= f.testCss %>' ]
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1,
                report:'min'
            },
            target: {
                files: {
                    '<%= f.css %>': ['<%= f.css %>']
                }
            }
        },

        clean: {
            assets: {
                src: [
                    '<%= f.copyProductionImg %>*',
                    '<%= f.copyProductionFonts %>*'
                ]
            },
            removeEmpty: {
                src:[
                    '<%= f.copyProductionImg %>empty',
                    '<%= f.copyProductionFonts %>empty',
                ]
            }
        },

        copy: {
            assets: {
                files: [
                    {
                        expand  : true,
                        flatten : true,
                        src     : [ '<%= f.projectPath %>themes/<%= f.themeName %>/img/*' ],
                        dest    : '<%= f.copyProductionImg %>',
                        filter  : 'isFile'
                    },{
                        expand  : true,
                        flatten : true,
                        src     : [ '<%= f.projectPath %>themes/<%= f.themeName %>/fonts/*' ],
                        dest    : '<%= f.copyProductionFonts %>',
                        filter  : 'isFile'
                    }
                ]
            }
        },

        stylestats: {
            options: {
                size                   : true,
                gzippedSize            : false,
                simplicity             : true,
                rules                  : true,
                selectors              : true,
                lowestCohesion         : true,
                lowestCohesionSelector : true,
                totalUniqueFontSizes   : true,
                uniqueFontSize         : true,
                totalUniqueColors      : true,
                uniqueColor            : true,
                idSelectors            : true,
                universalSelectors     : true,
                importantKeywords      : true,
                mediaQueries           : true
            },
            src: [ '<%= f.testCss %>' ]
          }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('frontsize', [
        'sass:production',
        'test',
        'minify'
    ]);

    grunt.registerTask('frnAssets', [
        'sass:production',
        'clean',
        'assets',
        'test',
        'minify'
    ]);

    grunt.registerTask('devAssets', [
        'sass:production',
        'assets',
        'test',
        'minify'
    ]);

    grunt.registerTask('autoprefix', [
        'sass:autoprefixer',
        'autoprefixer',
        'test'
    ]);

    grunt.registerTask('autoAssets', [
        'sass:autoprefixer',
        'autoprefixer',
        'assets',
        'test'
    ]);

    grunt.registerTask('all', [
        'sass:production',
        'sass:autoprefixer',
        'autoprefixer',
        'assets',
        'test',
        'minify'
    ]);

    grunt.registerTask('assets', [
        'clean:assets',
        'copy:assets',
        'clean:removeEmpty'
    ]);

    grunt.registerTask('minify', [
        'cssmin',
        'stylestats'
    ]);

    grunt.registerTask('test', [
        'sass:test',
        'csslint:test'
    ]);
};
