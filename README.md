Structuring

const human = {
name: "~~",
lastName: "~~",
nationality : "~~~",
favFood: {
lunch: "gogi",
}
}

const {name, lastName, nationality: altName, favFood: {lunch}} = human;

요것이 Destructuring
: 이후 {} 를 넣으면 안으로 들어가는 것 nationality: {altName} 은 undefined

Spread operator

배열로부터 아이템을 가져와서 Unpack
const days = ["월", "화", "수"];
const otherDays = ["목", "금", "토"];
const allDays = [...days, ...otherDays, "일"]; => [ '월', '화', '수', '목', '금', '토' , "일"]

const obj = {
first: "hi",
second: "hello",
};

const obj2 = {
third: "bye bye",
};

const combined = { ...obj, ...obj2 };

console.log(combined); ==> { first: 'hi', second: 'hello', third: 'bye bye' }
