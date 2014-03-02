module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		coffee: {
			compile: {
				files: {
					'assets/js/vendor/coffee-vendor-compiled.js' : 'app/js/vendor/*.coffee',
					'assets/js/coffee-application-compiled.js' : [
						'src/js/**/*.coffee',
						'src/js/vendor/!(*).coffee'
					]
				}
			}
		},

		concat: {
			dist: {
				src: ['assets/js/vendor/*.js'],
				dest: 'assets/js/production.js'
			}
		},

		clean: [
			'assets/js/vendor/coffee-vendor-compiled.js',
			'assets/js/coffee-application-compiled.js'
		],

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'assets/css/application.min.css' : 'assets/css/global.scss'
				}
			}
		}

	});

	// Register your plugins here
	require('load-grunt-tasks')(grunt);

	// Register your tasks here
	grunt.registerTask('default', ['concat']);
	grunt.registerTask('dev', ['coffee', 'concat', 'clean', 'sass']);
};
