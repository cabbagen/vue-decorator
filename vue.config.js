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
    }
};