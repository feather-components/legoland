function getJsFiles(grunt) {
    var requires = [];
    var path = require('path');
    var jsFiles = grunt.file.expand('src/**/*.js');
    var pass = {};

    function getDeps(file) {
        var rs = [];

        if (pass[file]) {
            return [];
        }

        pass[file] = true;

        var reg = /require\(['"]([^'"]+)['"]\)/g;
        var content = grunt.file.read(file),
            result, rs = [];

        while (result = reg.exec(content)) {
            if (result[1]) {
                var dep = path.join(path.dirname(file), result[1]).replace(/\\+/g, '/') + '.js';

                if (!grunt.file.exists(dep)) {
                    continue;
                }

                rs = rs.concat(getDeps(dep));
                rs.push(dep);
            }
        }

        rs.push(file);

        return rs;
    }

    jsFiles.map(function(file) {
        var deps = getDeps(file);
        requires = requires.concat(deps);
    });

    var exists = {};

    return requires.concat(jsFiles).filter(function(file) {
        if (!exists[file]) {
            exists[file] = true;
            return true;
        }

        return false;
    });
}

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
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/css/icon',
                    src: 'iconfont.*',
                    dest: 'dist'
                },{
                    expand: true,
                    cwd: 'src/img',
                    src: '*.*',
                    dest: 'dist/img'
                },{
                    expand: true,
                    cwd: 'src/js',
                    src: '*.*',
                    dest: 'dist/js'
                },{
                    expand: true,
                    cwd: 'demo',
                    src: '*.*',
                    dest: 'dist/demo'
                }]
            }
        },

        concat: {
            js: {
                options: {
                    separator: ';',
                    process: function(content) {
                        return content.replace(/if\s*\(\s*typeof\s+define[\s\S]+?\}\s*else\s*\{([\s\S]*?)\}\s*(?=\}\)|$)/, function(all, $1) {
                            return '\t' + $1.trim() + '\n';
                        });
                    }
                },

                files: {
                    'dist/<%=pkg.name%>.js': jsFiles
                }
            },

            css: {
                options: {
                    process: function(content, file) {
                        return content.replace(/\.\//g, function(all) {
                            return all + file.split('/')[1] + '/';
                        });
                    }
                },

                files: {
                    'dist/<%=pkg.name%>.css': cssFiles
                }
            }
        },

        uglify: {
            options: {
                sourceMap: true,
                sourceMapName: 'dist/<%=pkg.name%>-min.js.map'
            },
            build: {
                src: 'dist/<%=pkg.name%>.js',
                dest: 'dist/<%=pkg.name%>-min.js'
            }
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
        watch:{
            start:{
                files: ['src/css/*/*.css','src/js/*.js','demo/*.*'],
                tasks: ['less','copy']
            }
        }
    });

    grunt.event.on('watch', function(action, filepath, target) {
          grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less','copy','watch']);
};
