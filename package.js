Package.describe({
    name: 'wilddeer:stylus-autoprefixer',
    summary: 'Stylus + Autoprefixer',
    version: '1.0.0',
    git: 'https://github.com/wilddeer/meteor-stylus-autoprefixer.git'
});


Package.registerBuildPlugin({
    name: 'compileStylus',
    use: [],
    sources: [
        'plugin/compile-stylus.js'
    ],
    npmDependencies: {
        'stylus': '0.49.3',
        'autoprefixer-stylus': '0.4.0'
    }
});