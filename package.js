Package.describe({
    name: 'wilddeer:stylus-autoprefixer',
    summary: 'Stylus + Autoprefixer',
    version: '1.1.0',
    git: 'https://github.com/wilddeer/meteor-stylus-autoprefixer.git'
});


Package.registerBuildPlugin({
    name: 'compileStylus',
    use: [],
    sources: [
        'plugin/compile-stylus.js'
    ],
    npmDependencies: {
        'stylus': '0.54.5',
        'autoprefixer-stylus': '0.9.3'
    }
});
