let posts = ["Hi", "Hello", "Bye"];
let greetings = ["Hi", "Bye", "Howdy", "Suup"];

posts.forEach((post) => console.log(post));
if (!greetings.includes("Hello")) {
  greetings.push("Hello");
}

console.log(greetings);
