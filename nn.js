 let arr =[{
		id: 1,
		title: "1. What's the output?",
		text: null,
		code: '<span class="hljs-keyword">function</span> <span class="hljs-title function_">sayHi</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(name);\n  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(age);\n  <span class="hljs-keyword">var</span> name = <span class="hljs-string">&#x27;Lydia&#x27;</span>;\n  <span class="hljs-keyword">let</span> age = <span class="hljs-number">21</span>;\n}\n\n<span class="hljs-title function_">sayHi</span>();',
		choices: [
			"A: `Lydia` and `undefined`",
			"B: `Lydia` and `ReferenceError`",
			"C: `ReferenceError` and `21`",
			"D: `undefined` and `ReferenceError`",
		],
		answer: "#### [](#answer-d)Answer: D\n\nWithin the function, we first declare the `name` variable with the `var` keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of `undefined`, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the `name` variable, so it still holds the value of `undefined`.\n\nVariables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get _initialized_. They are not accessible before the line we declare (initialize) them. This is called the \"temporal dead zone\". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`.",
	}]


	console.log(arr[0].title)

