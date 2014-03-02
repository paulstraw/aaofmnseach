module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		coffee: {
			compile: {
				files: {
					'app/assets/js/vendor/coffee-vendor-compiled.js' : 'src/js/vendor/*.coffee',
					'app/assets/js/coffee-application-compiled.js' : [
						'src/js/**/*.coffee',
						'src/js/vendor/!(*).coffee'
					]
				}
			}
		},

		concat: {
			dist: {
				src: ['app/assets/js/vendor/*.js'],
				dest: 'app/assets/js/production.js'
			}
		},

		clean: [
			'app/assets/js/vendor/coffee-vendor-compiled.js',
			'app/assets/js/coffee-application-compiled.js'
		],

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'app/assets/css/application.min.css' : 'app/assets/css/global.scss'
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
