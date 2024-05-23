// newtab.js
chrome.runtime.sendMessage({ message: "getRandomQuestion" }, (response) => {
	console.log(response[2].title);
	//console.log(response.question2);
	if (response && response[0].question) {
		document.getElementById("question").innerText = response[0].question;
		document.getElementById("input").innerText =
			"Input: " + response[0].input;
		document.getElementById("output").innerText =
			"Output: " + response[0].output;
		document.getElementById("explanation").innerText =
			"Explanation: " + response[0].explanation;
		document.getElementById("source").innerText =
			"Source: " + response[0].source;
		document.getElementById("topic").innerText =
			"Topic: " + response[0].topic;
		document.getElementById("solve").href = response[0].link_to_solve;
	}

	// if (response && response[1]) {
	// 	document.getElementById("question2").innerText =
	// 		response[1]["Problem: "];
	// 	if (response[1].URL) {
	// 		let so = response[1].URL.split("/")[2].split(".");

	// 		document.getElementById("source2").innerText = "Source: " + so[1];
	// 	}

    // 	document.getElementById("topic2").innerText =
	// 		"Topic: " + response[1]["Topic:"];

    //   document.getElementById("solve2").href = response[1].URL;

    //   document.querySelector(".leetcode").addEventListener("click", () => {

    //     let vall = response[1]["Problem: "]
    //     window.open(`https://www.google.com/search?q=${vall}:leetcode`, "_blank");
    //   });
	// }


	if(response && response[2]){
		document.getElementById("question3").innerText = response[2].title;
		document.getElementById("input3").innerHTML = `<pre>${response[2].code}</pre>`;
	}
});
