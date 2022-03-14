module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ["plugin:vue/essential", "eslint:recommended"],
	parserOptions: {
		parser: "babel-eslint",
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		// indent: ["off"],
		// allow async-await
		"generator-star-spacing": "off",
		"space-before-function-paren": "off",
		semi: ["error", "never"], // 结尾不添加分号
		quotes: [2, "double"], // 使用双引号
		eqeqeq: ["error", "always", {"null": "ignore"}], // 全等验证 只用===
		"no-unused-vars": 2,
		"no-tabs": "off",
		"no-var": "error",
		"global-require": 0,
		"no-alert": 1, // 不允许使用alert，confirm，prompt
		"max-statements-per-line": ["error", { max: 1 }], // 强制每一行中所允许的最大语句数量
		"no-template-curly-in-string": 2, // 禁止在常规字符串中出现模板字面量占位符语法
		"no-nested-ternary": 1, // 禁用嵌套的三元表达式
		"no-undef": 2, // 禁止未声明的变量
		"no-self-assign": 2, // 禁止自我赋值
		"no-new-wrappers": 1, // 禁止对 String，Number 和 Boolean 使用 new 操作符
		"block-spacing": 2,
		"max-params": [2, 3],
		"keyword-spacing": ["error", { before: true, after: true }],
		"indent": ["error", "tab"], // 缩进使用tab

		// sonarjs规则
		// "sonarjs/cognitive-complexity": ["error", 100], // 方法认知复杂度
	}
}
