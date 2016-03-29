var gulp = require('gulp'),
		less = require('gulp-less'),
		csso = require('gulp-csso'),
		jshint = require('gulp-jshint'),
		uglify = require('gulp-uglify'),
		concat = require('gulp-concat'),
		clean = require('gulp-clean'),
		rename = require('gulp-rename'),
		rev = require('gulp-rev'),
		revCollector = require('gulp-rev-collector'),
		//  gulp compile handlebars
		handlebars = require('gulp-compile-handlebars'),

		webpack = require ('webpack');
		var gutil = require ('gulp-util');

var h='./views/index/';

var outputDir= require ('./config.js');
outputDir=outputDir.output;


gulp.task('clean',function(){
	return gulp.src('dist/app',{read:false})
						.pipe(clean());
})

gulp.task('jsx',function(){
	webpack(require(h+'/entry.js'),function(err,stats){
				if (err) throw new gutil.PluginError('webpack',err);
						gutil.log(['webpack'],stats.toString({
							//output configuration
							
				}))
		})
});

gulp.task('css',['html'],function(){
	return gulp.src(h+'/less/*.less')
					.pipe(less())
					//.pipe(csso()) //css 压缩
					.pipe(rename(function(path){
							path.basename += '.min';
							path.extname = '.css'
					}))
					.pipe(rev())
					.pipe(gulp.dest(outputDir.css))//css
					.pipe(rev.manifest())
					.pipe(gulp.dest(outputDir.css));//json
});


gulp.task('rev',['html','css'],function(){
	return gulp.src([outputDir.css+'*.json',outputDir.view+'*.html'])
					.pipe(revCollector({
							replaceReved:true
					}))
					.pipe(gulp.dest(outputDir.view));
});

gulp.task('html',function(){
	return gulp.src(h+'/*.html')
						 .pipe(gulp.dest(outputDir.view));
});

gulp.task('zony',function(){
	var watcher = gulp.watch('views/**', ['html', 'css','rev','jsx']);
	watcher.on('change',function(event){
			var rePath=event.path,
			 		startIndex=rePath.indexOf('views/')+6,
			 		endString=rePath.substr(startIndex),
			 		dirz=endString.split('/')[0];
			h='./views/'+dirz+'/';
			console.log(dirz);
	})
})
gulp.task('index', ['html', 'css','rev','jsx']);