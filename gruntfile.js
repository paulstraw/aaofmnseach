module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		coffee: {
			compile: {
				files: {
					'public/js/vendor/coffee-vendor-compiled.js' : 'public/js/vendor/*.coffee',
					'public/js/coffee-application-compiled.js' : [
						'public/js/**/*.coffee',
						'public/js/vendor/!(*).coffee'
					]
				}
			}
		},

		concat: {
			dist: {
				src: ['public/js/vendor/*.js', 'public/js/coffee-vendor-compiled.js', 'public/js/coffee-application-compiled.js'],
				dest: 'public/js/production.js'
			}
		},

		clean: [
			'public/js/vendor/coffee-vendor-compiled.js',
			'public/js/coffee-application-compiled.js'
		],

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'public/css/application.min.css' : 'public/css/global.scss'
				}
			}
		},

		// ==== Watcher ===

		watch: {
			scripts: {
                files: ['public/js/**/*.coffee'],
                tasks: ['coffee', 'concat', 'clean'],
                options: {
                    spawn: false
                }
            },

			css: {
				files: ['public/css/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
			}
		}

	});

	// Register your plugins here
	require('load-grunt-tasks')(grunt);

	// Register your tasks here
	grunt.registerTask('default', ['concat']);
	grunt.registerTask('dev', ['watch']);
};
