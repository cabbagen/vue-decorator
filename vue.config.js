module.exports = {
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        // 'primary-color': '#ff6161',
                    },
                    javascriptEnabled: true,
                },
            },
        },
    },
    configureWebpack: {
        externals: {
            vue: 'Vue',
        },
        devServer: {
            disableHostCheck: true,
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/webapp/app/' : '/',
};