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

Classes
constructor(name, lastName) 의 의미는 클래스 생성시 두 인자를 받아 사용한다는 뜻
클래스는 상속가능 Human 을 Baby 가 상속하면 Human 의 모든것을 사용가능하다
