const obj = {
  first: "hi",
  second: "hello",
};

const obj2 = {
  third: "bye bye",
};

const combined = { ...obj, ...obj2 };

console.log(combined);
