// const promptly = require("promptly");

class Greeter {
  greeting: string;
  constructor(greeting: string) {
    this.greeting = greeting;
  }

  greet(name: string) {
    return `${this.greeting} ${name}`;
  }
}

// (async () => {
//   const name = await promptly.prompt("Name", { timeout: 10000 });
//   console.log(`${name}`);
// })();

const promptly = require("promptly");
const translate = require("./Greeter.ts");

(async () => {
  const englishWord = await promptly.prompt("English word: ");
  const piglatinWord = greet(englishWord);
  console.log(piglatinWord);
})();

function greet(name: string, greeting = "wassup") {
  return `${greeting} ${name}`;
}
