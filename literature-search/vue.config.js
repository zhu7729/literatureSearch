const IS_DEV = ["development"].includes(process.env.NODE_ENV);
const path = require('path');
const resolve = dir => path.join(__dirname, dir);
module.exports = {
    publicPath: './',
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
        host: '0.0.0.0',
        open: true,
        port: 8080,
        overlay: {
            errors: true,
            warnings: true
        }
    },
    configureWebpack: config => {
        config.optimization = {
            splitChunks: {
                cacheGroups: {
                    common: {
                        name: "chunk-common",
                        test: resolve('src/components'),
                        chunks: "all",
                        minChunks: 3,
                        priority: 1,
                        reuseExistingChunk: true,
                        enforce: true
                    },
                    vendors: {
                        name: "chunk-vendors",
                        test: /[\\/]node_modules[\\/]/,
                        chunks: "initial",
                        priority: 2,
                        reuseExistingChunk: true,
                        enforce: true
                    },
                    elementUI: {
                        name: "chunk-elementui",
                        test: /[\\/]node_modules[\\/]element-ui[\\/]/,
                        chunks: "all",
                        priority: 3,
                        reuseExistingChunk: true,
                        enforce: true
                    }
                }
            }
        };
        if (IS_DEV) {
            config.devServer = {
                disableHostCheck: true
            };
        }
    },
    chainWebpack: config => {
        config.resolve.symlinks(true);

        config.when(process.env.NODE_ENV !== 'development', config => {
            config.optimization.minimizer('terser').tap(options => {
                options[0].terserOptions.compress.drop_console = true
                return options
            });
        });

        config.module
            .rule("images")
            .use("image-webpack-loader")
            .loader("image-webpack-loader")
            .options({
                mozjpeg: {progressive: true, quality: 65},
                optipng: {enabled: false},
                pngquant: {quality: [0.65, 0.9], speed: 4},
                gifsicle: {interlaced: false},
                webp: { quality: 75 }
            });

        config.optimization.delete("splitChunks");

    },
    css: {
        sourceMap: false,
        loaderOptions: {
            scss: {
                prependData: `
                    @import "@/assets/scss/common.scss";
                    `
            },
            postcss: {
                plugins: [
                    require('autoprefixer')({
                        overrideBrowserslist: ['last 20 versions']
                    }),
                ]
            }
        }
    },
};
