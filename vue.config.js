module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://39.97.33.178",
                changeOrigin: true
            },
            "/member": {
                target: "http://www.apisdr.com",
                changeOrigin: true
            },
            "/apc": {
                target: "https://m.maoyan.com",
                changeOrigin: true,
                pathRewrite: {
                    '^/apc': '' // 路径重写
                }
            }
        }
    },
}