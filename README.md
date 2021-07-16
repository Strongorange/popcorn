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

Array.map , Array.filter
map 은 2가지 인자 사용가능 첫번째는 배열에서 현재의 아이템 두번째는 배열의 인덱스
filter 는 주어진 필터를 통과하는 아이템들의 배열을 만듬

forEach
map 과 filter 는 조건에 맞는 새로운 배열을 리턴하지만 forEach 는 각각 아이템들이 특정 동작을 함

include
배열에 특정한 것이 있는지 확인할 수 있음

React Route
exact 가 없으면 /tv , /tv/popular=> 접속시 /tv 에서 출력하라고 한 컴포넌트도 동시에 출력됨
리액트에서는 href 말고 Link to 사용!
Switch 는 한 번에 오직 하나의 Route 만 Render 하게 해줌
Redirect 로 말도안되는 url ex) /tv/dawrfuhgdsfgdfsb 로 가면 홈으로 리다이렉트 해 줌!
