module.exports = function(grunt) {
    var jsFiles = getJsFiles(grunt),
        cssFiles = [];
    //console.log(jsFiles);
    jsFiles.forEach(function(file) {
        file = file.replace('.js', '.css');

        if (grunt.file.exists(file)) {
            cssFiles.push(file);
        }
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            debug: {
                files: [{
                    expand: true,
                    cwd: 'src/css/icon',
                    src: 'iconfont.ttf',
                    dest: 'tests'
                }, {
                    expand: true,
                    cwd: 'src/css/icon',
                    src: 'iconfont.woff',
                    dest: 'tests'
                }, {
                    expand: true,
                    cwd: 'examples',
                    src: '*.*',
                    dest: 'tests/examples'
                }]
            },
            release: {
                files: [{
                    expand: true,
                    cwd: 'src/css/icon',
                    src: 'iconfont.ttf',
                    dest: 'dists'
                }, {
                    expand: true,
                    cwd: 'src/css/icon',
                    src: 'iconfont.woff',
                    dest: 'dists'
                }, {
                    expand: true,
                    cwd: 'examples',
                    src: '*.*',
                    dest: 'dists/examples'
                }]
            },
        },

        //压缩CSS
        cssmin: {
            build: {
                files: {
                    'dist/<%=pkg.name%>-min.css': 'dist/<%=pkg.name%>.css'
                }
            }
        },

        less: {
            build: {
                options: {
                    //paths: ["assets/css"], // @import 加载文件的路径
                    cleancss: true // 压缩css文件 
                },
                files: {
                    "dist/legoland.min.css": "src/legoland.css"
                }
            }
        },
        watch: {
            start: {
                files: ['src/css/*/*.css', 'src/js/*.js', 'examples/*.*'],
                tasks: ['less', 'copy']
            }
        }
    });

    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less', 'copy:dev', 'watch']);
    grunt.registerTask('release', ['less', 'copy:release']);
};
