function sayHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}
const outputElement = document.getElementById("output");

sayHello().then((message) => {
  outputElement.textContent = message;
});