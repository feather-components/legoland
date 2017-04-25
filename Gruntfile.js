module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            debug: {
                files: [{
                    expand: true,
                    cwd: 'src/css/icon',
                    src: 'iconfont.ttf',
                    dest: 'test'
                }, {
                    expand: true,
                    cwd: 'src/css/icon',
                    src: 'icondemo.html',
                    dest: 'test'
                }, {
                    expand: true,
                    cwd: 'src/css/icon',
                    src: 'iconfont.woff',
                    dest: 'test'
                }, {
                    expand: true,
                    cwd: 'examples',
                    src: '*.*',
                    dest: 'test/examples'
                }, {
                    expand: true,
                    cwd: 'examples/js',
                    src: '*.*',
                    dest: 'test/examples/js'
                }]
            },
            release: {
                files: [{
                    expand: true,
                    cwd: 'src/css/icon',
                    src: 'iconfont.ttf',
                    dest: 'dist'
                }, {
                    expand: true,
                    cwd: 'src/css/icon',
                    src: 'icondemo.html',
                    dest: 'dist'
                }, {

                    expand: true,
                    cwd: 'src/css/icon',
                    src: 'iconfont.woff',
                    dest: 'dist'
                }, {
                    expand: true,
                    cwd: 'examples',
                    src: '*.*',
                    dest: 'dist/examples'
                }, {
                    expand: true,
                    cwd: 'src/js',
                    src: '*.*',
                    dest: 'dist/js'
                }, {
                    expand: true,
                    cwd: 'examples/js',
                    src: '*.*',
                    dest: 'dist/examples/js'
                }]
            },
        },

        less: {
            debug: {
                options: {
                    cleancss: false // 压缩css文件 
                },
                files: {
                    "test/legoland.css": "src/legoland.css",
                    "test/examples/css/style.css": "examples/css/style.css"
                }
            },

            release: {
                options: {
                    cleancss: false // 压缩css文件 
                },
                files: {
                    "dist/legoland.css": "src/legoland.css",
                    "dist/examples/css/style.css": "examples/css/style.css"
                }
            }
        },

        cssmin: {
            release: {
                files: {
                    "dist/legoland.min.css": "dist/legoland.css" 
                }
            }
        },

        watch: {
            start: {
                files: ['src/css/*/*.css',  'src/style/*.css','src/js/*.js', 'examples/*.*'],
                tasks: ['less', 'copy']
            }
        },

        clean: {
            debug: ['./dist'],
            release: ['./test', './dist']
        }
    });

    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['clean:debug', 'copy:debug', 'less:debug', 'watch']);
    grunt.registerTask('release', ['clean:release', 'copy:release', 'less:release', 'cssmin:release']);
};
