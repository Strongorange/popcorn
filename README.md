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

CSS
컴포넌트와 CSS 를 따로분리하는 것은 컴포넌트의 캡슐화에 방해됨 모든 것이 한 공간에있는 코딩을 지향
글로벌한 CSS 가 아닌 컴포넌트에만 작용하는 CSS 를 지향
CSS.module 을 사용해서 랜덤한 클래스 네임을 지정해 줄 수 있음
근데 className 을 기억하기 싫음

styled Component 를 우리는 사용 이로인해 컴포넌트 파일 안에서 스타일을 작성 가능
npm i styled-components
styled-components 를 이용해서 리스트를 만들어 사용
vscode-styled-components 설치하면 css 자동완성 사용 가능

const 컴포넌트이름 = styled.HTML태그종류`CSS스타일`; 형식으로 사용!

styled Component 는 글로벌 설정도 가능함
npm i styled-reset
reset.css 처럼 모든 css 를 날려줌
https://wonit.tistory.com/301

Header 가 어떤 Route 에 있냐에 알게하기
SC = styled-components 에서는 SC 에 props 를 줄 수 있음
withRouter 는 다른 컴포넌트를 감싸는 컴포넌트
Header 에서 export 하는건 다른 컴포넌트가 안에 있는 withRouter
withRouter 로 감쌈으로서 props 를 받을 수 있음
props.location.pathname 을 받아서 pathname === "경로" 를 판단해서 SC 의 border-bottom color 를 true 일때 바뀌줌
transition 을 사용해서 간단한 애니메이션 사용
