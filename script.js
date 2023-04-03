//your JS code here. If required.
function sayHello() {
	return new promise((resolve) =>{
		setTimeout(() =>{
			resolve("Hello,world!");
		},1000);
	});
}
const output = document.getElementById("output");
sayHello().then((result) =>{
	output.textContent = result;
});