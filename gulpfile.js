    var gulp =require('gulp');
    var $ = require('gulp-load-plugins')();
    var open =  require('open');

    var app ={
        srcPath:'src/',
        devPath:'build/',
        proPath:'dist/'
    }
    gulp.task('lib',function(){
        gulp.src('lib/**/*.min.js')
        .pipe(gulp.dest(app.devPath+'vendor'))
        .pipe(gulp.dest(app.proPath+'vendor'))
        .pipe($.connect.reload());
    });

    gulp.task('html',function(){
        gulp.src(app.srcPath+'**/*.html')
        .pipe(gulp.dest(app.devPath))
        .pipe(gulp.dest(app.proPath))
        .pipe($.connect.reload());
    });

    gulp.task('json',function(){
        gulp.src(app.srcPath+'data/**/*.json')
        .pipe(gulp.dest(app.devPath+'data'))
        .pipe(gulp.dest(app.proPath+'data'))
        .pipe($.connect.reload());
    });

    gulp.task('mdcss',function(){
        gulp.src('lib/mdui/src/mdui.less')
        .pipe($.less())
        .pipe(gulp.dest(app.devPath+'css'))
        .pipe($.cssmin())
        .pipe(gulp.dest(app.proPath+'css'))
        .pipe($.connect.reload());
    });

    gulp.task('mdfont',function(){
        gulp.src('lib/mdui/dist/fonts/**/*')
        .pipe(gulp.dest(app.devPath+'fonts'))
        .pipe(gulp.dest(app.proPath+'fonts'))
        .pipe($.connect.reload());
    });

    gulp.task('mdicon',function(){
        gulp.src('lib/mdui/dist/icons/**/*')
        .pipe(gulp.dest(app.devPath+'fonts'))
        .pipe(gulp.dest(app.proPath+'fonts'))
        .pipe($.connect.reload());
    });

    gulp.task('less',function(){
        gulp.src(app.srcPath+'style/index.less')
        .pipe($.less())
        .pipe(gulp.dest(app.devPath+'css'))
        .pipe($.cssmin())
        .pipe(gulp.dest(app.proPath+'css'))
        .pipe($.connect.reload());
    });

    gulp.task('js',function(){
        gulp.src(app.srcPath+'script/**/*.js')
        .pipe($.concat('index.js'))
        .pipe(gulp.dest(app.devPath+'js'))
        .pipe($.uglify())
        .pipe(gulp.dest(app.proPath+'js'))
        .pipe($.connect.reload());
    });

    gulp.task('image',function(){
        gulp.src(app.srcPath+'image/**/*')
        .pipe(gulp.dest(app.devPath+'image'))
        .pipe($.imagemin())
        .pipe(gulp.dest(app.proPath+'image'))
        .pipe($.connect.reload());
    });

    gulp.task('build',['image','js','mdcss','mdfont','mdicon','less','lib','html','json']);

    gulp.task('serve',['build'],function(){
        $.connect.server({
            root:[app.devPath],
            livereload:true,
            port:1234
        });
        open('http://localhost:1234');

        gulp.watch(app.srcPath+'script/**/*.js',['js']);
        gulp.watch(app.srcPath+'lib/**/*.js',['lib']);
        gulp.watch(app.srcPath+'**/*.html',['html']);
        gulp.watch(app.srcPath+'data/**/*.json',['json']);
        gulp.watch(app.srcPath+'lib/mdui/src/mdui.less',['mdcss']);
        gulp.watch(app.srcPath+'lib/mdui/dist/fonts/**/*',['mdfont']);        
        gulp.watch(app.srcPath+'lib/mdui/dist/icons/**/*',['mdicon']);        
        gulp.watch(app.srcPath+'style/index.less',['less']);
        gulp.watch(app.srcPath+'image/**/*',['image']);
    });

    gulp.task('default',['serve']);//输入gulp默认执行的命令

    gulp.task('clean',function(){
        gulp.src([app.devPath,app.proPath])
        .pipe($.clean());
    });