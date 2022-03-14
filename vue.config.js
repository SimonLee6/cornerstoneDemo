/*
 * @Description:
 * @Author: lix
 * @Date: 2021-03-11 15:32:33
 */
const path = require("path")
const resolve = (dir) => path.join(__dirname, dir)
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const isProduction = process.env.NODE_ENV === "production"
// const webpack = require("webpack");

module.exports = {
	publicPath: "/",
	productionSourceMap: false,
	devServer: {
		port: 2022,
		proxy: {
			"/api": {
				target: "http://192.168.1.191", // 191
				changeOrigin: true,
				ws: true,
				logLevel: "debug",
			},
		},
	},
	css: {
		loaderOptions: {
			scss: {
				prependData:
          "@import '~@/scss/variable.scss';" + "@import '~@/scss/mixin.scss';",
			},
		},
	},
	chainWebpack: (config) => {
		config.resolve.alias
			.set("@", resolve("./src"))
			.set("@api", resolve("src/api"))
			.set("@com", resolve("src/components"))
			.set("@module", resolve("src/module"))
			.set("@lay", resolve("src/layout"))
			.set("@mixin", resolve("src/mixin"))
			.set("@plugins", resolve("src/plugins"))
			.set("@util", resolve("src/utils/util"))
			.set("@httpAxios", resolve("src/utils/axios"))
			.set("@baseApi", resolve("src/api/base.service"))
			.set("@vars", resolve("src/utils/variable"))

		// 去除console.log
		config.optimization.minimizer("terser").tap((args) => {
			args[0].terserOptions.compress.drop_console = true
			return args
		})

		config
			.plugin("html")
			.tap((args) => {
				args[0].title = "imageViewer"
				return args
			})
			.end()
		// .plugin("BundleAnalyzerPlugin")
		// .use(BundleAnalyzerPlugin)
		// .tap(args => {
		// 	args[0] = {
		// 		analyzerMode: "server",
		// 		analyzerHost: "127.0.0.1",
		// 		analyzerPort: 8899,
		// 		reportFilename: "report.html",
		// 		defaultSizes: "parsed",
		// 		openAnalyzer: false,
		// 		generateStatsFile: false,
		// 		statsFilename: "stats.json",
		// 		statsOptions: null,
		// 		logLevel: "info"
		// 	}
		// 	return args
		// })
		// .end()
	},
	configureWebpack: (config) => {
		if (isProduction) {
			// 配置忽略打包的库
			config.externals = {}
		}
	},
}
