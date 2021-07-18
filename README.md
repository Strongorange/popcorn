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

## Classes

constructor(name, lastName) 의 의미는 클래스 생성시 두 인자를 받아 사용한다는 뜻
클래스는 상속가능 Human 을 Baby 가 상속하면 Human 의 모든것을 사용가능하다

## Array.map , Array.filter

map 은 2가지 인자 사용가능 첫번째는 배열에서 현재의 아이템 두번째는 배열의 인덱스
filter 는 주어진 필터를 통과하는 아이템들의 배열을 만듬

## forEach

map 과 filter 는 조건에 맞는 새로운 배열을 리턴하지만 forEach 는 각각 아이템들이 특정 동작을 함

## includes

배열에 특정한 것이 있는지 확인할 수 있음

## React Route

exact 가 없으면 /tv , /tv/popular=> 접속시 /tv 에서 출력하라고 한 컴포넌트도 동시에 출력됨
리액트에서는 href 말고 Link to 사용!
Switch 는 한 번에 오직 하나의 Route 만 Render 하게 해줌
https://baeharam.netlify.app/posts/react/why-switch-is-needed
Redirect 로 말도안되는 url ex) /tv/dawrfuhgdsfgdfsb 로 가면 홈으로 리다이렉트 해 줌!

## CSS

컴포넌트와 CSS 를 따로분리하는 것은 컴포넌트의 캡슐화에 방해됨 모든 것이 한 공간에있는 코딩을 지향
글로벌한 CSS 가 아닌 컴포넌트에만 작용하는 CSS 를 지향
CSS.module 을 사용해서 랜덤한 클래스 네임을 지정해 줄 수 있음
근데 className 을 기억하기 싫음

## styled Component 를 우리는 사용 이로인해 컴포넌트 파일 안에서 스타일을 작성 가능

npm i styled-components
styled-components 를 이용해서 리스트를 만들어 사용
vscode-styled-components 설치하면 css 자동완성 사용 가능

const 컴포넌트이름 = styled.HTML태그종류`CSS스타일`; 형식으로 사용!

styled Component 는 글로벌 설정도 가능함
npm i styled-reset
reset.css 처럼 모든 css 를 날려줌
https://wonit.tistory.com/301

## Header 가 어떤 Route 에 있냐에 알게하기

SC = styled-components 에서는 SC 에 props 를 줄 수 있음
withRouter 는 다른 컴포넌트를 감싸는 컴포넌트
Header 에서 export 하는건 다른 컴포넌트가 안에 있는 withRouter
withRouter 로 감쌈으로서 props 를 받을 수 있음
props.location.pathname 을 받아서 pathname === "경로" 를 판단해서 SC 의 border-bottom color 를 true 일때 바뀌줌
transition 을 사용해서 간단한 애니메이션 사용
https://developer.mozilla.org/ko/docs/Web/CSS/transition
transition 을 적용할 property 를 지정하고 사용할 수 있음!
https://ljh86029926.gitbook.io/coding-apple-react/3/history-go-and-goback
withRouter 를 이용해서 뒤로가기 앞으로 가기 도 구현 가능한 듯
withRouter 는 일단 props 의 history, location 같은 아이들을 사용하기 위해서 사용한다고 이해

## API Part

https://developers.themoviedb.org/3/movies/get-popular-movies

## API Verbs

- [x] Now Playing (Movie)
- [x] Top Rated (TV, Movie)
- [x] Popular (TV, Movie)
- [x] Upcoming (Movie)
- [x] Airing Today (TV)
- [x] Detail (TV, Movie) nedd Id
- [x] Search (TV, Movie)

API 를 효율적으로 사용하기 위해 api.js 생성 후 axios 설치
axios 는 config 설정이 가능해서 baseURL, headers, timeout 같은 것들을 여러곳에서 반복 작성할 필요가 없음
https://www.npmjs.com/package/axios

api.get 할때 반드시 상대경로를 써야함 맨 앞에 /붙이고 get 요청하면 baseURL 을 무시하고 /~~ 로 요청을 보냄
Detail 을 가져오는 api 에서는 append to response 사용가능
https://developers.themoviedb.org/3/getting-started/append-to-response
한번의 요청으로 다른 정보들도 가져오기 가능 ex) 예고편 가져오기 가능
axios 설정할때 말고도 개별적으로 params 를 추가가능 해당 기능으로 append_to_response 추가
search 할때 query 는 URL encoded 가 되어야한다고 써있음

## Container Presenter Pattern

https://kyounghwan01.github.io/blog/React/container-presenter-dessign-pattern/#presentational-container-%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB-%E1%84%91%E1%85%A2%E1%84%90%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A1%E1%86%AB

Container 에서 state 를 가지고 로직을 수행하고 Presenter 가 화면을 뿌려줌

- 📝 컨테이너 프리젠터 패턴 (1분20초)
- 컨테이너 : data를 가지고, state(상태값)가지고, api를 불러와서 모든 로직을 처리함 (데이터 담당)
- 프리젠터 : 컨테이너가 처리한 데이터들을 보여주는 역할을 하는 함수형 컴포넌트. state(상태값), api, 클래스를 다루지않음 (스타일 담당)

## Container

라우트에 폴더를 만들고 컨테이너를 export 하는데 필요한 index.js 들을 만들어 줌
Router 에서 폴더경로에서 컴포넌트를 불러오는데 폴더안에 index.js 가 있으면 index.js 를 참조해 컴포넌트를 가져옴

# TV, Home Container

마운트 이후 실행되는 부분에서 try, catch, finally 를 사용함 finally 는 오류가 나던 잘 실행되건 어쨌던 실행하는 녀석
try 문에서 만들어놓은 api 를 이용해서 nowPlaying,upcoming,topRated,popular 를 받아오고 this.setState 이용해서 state 에 객체들 저장 => Hooks 로 바꿀 수 있을듯
TVContainer 도 마찬가지로 작업해줌

# Search Container

인풋박스에 값이 공백이 아니면 handleSubmit 을 실행 searchByTerm 에서 search 의 기본값은 로딩이 false
이기에 검색을했을때 로딩을 true 로 하고 끝나면 finally 사용해서 로딩을 false 로
영화와 티비쇼를 api 의 search 를 이용해서 객체에 담고 state 에 추가해줌
이후에 Presenter 에서 onChange 를 이용해서 handleSubmit 을 실행되게 할 것

# Detail Container

영화나 티비쇼의 디테일 페이지로 갈때 컴포넌트는 동일한 것을 사용하되 url 을 다르게
movie/:id, show/:id 구별해서 들어가는 것을 구현해야함
디폴트로 Router 는 모든 Route 들에게 props 를 줌 => history,location,match 사용가능

- [x] props 를 사용해서 현재내가 movie 에 있는지 show 에있는지 :id 는 무슨 값을 가지고있는지 알아내야함
      match 에 보면 params 을 알 수 있음
      id 가 숫자가 아니여도 params id 는 작동함 그리고 사실 params id 를 typeof 로 보면 string 임 => parseInt로 숫자로 바꿔줌
      isNaN 을 사용해서 parsedId 가 NaN(숫자가 아니면) props 의 history.push("/") 를 사용해 홈으로 돌려보냄
      이 경우 return 으로 보내줘서 함수를 끝내줘야함!
- [x] movie 인지 show 인지 구분해야함
      컴포넌트가 생성될때 isMovie 를 만드는데 props 의 location.pathname 에서 /movie/ 가 있는지 .includes 를 사용해서 true,false 를 받아 state 에 저장함
      이후 componentDidMount 애서 movie 라면 빈 result 에 movieApi 를 사용해서 parsedId 로 영화를 찾고 state 에 저장 movie 가 아니라면 tv 이니 showApi 를 사용해서 tvshow 를 찾고 state 에 저장!
- [x] let 으로 사용된 result 때문에 const result = {{{}} = await ~~ 사용 못 함
      ({data: result} = await ~~~~) 사용해서 해결

## Presenter

- [x] 각 Presenter 들에서 각 Container 가 props 로 보낸 것들을 받고 PropTypes 설정
- [x] Section.js
      Section.js 는 컨테이너, 타이틀, 그리드로 구성되고 title, children 을 props 로 받음
      children 이란 우리가 주는 데이터들인데 props 로 전달하는 것이 아닌 <Section>{여기} </Section> 식으로 전달
      https://codingmania.tistory.com/325
      리액트에서는 children props 는 이렇게 사용하는듯
      HomePresenter 에서 loading 과 nowPlaying 을 모두 검증 후 리턴해야함
- [x] Loader
      로딩시 빈 화면을 띄우는 보다는 이모티콘을 띄워주는게 나음 Loader 를 만들어주고 표시해줌
- [x] Search Presenter
      Search Container 에서 searchTerm 과 handleSubmit 을 Presenter 에 전달
      Presenter 에는 form 과 input 이 있는데 전달받은 searchTerm 을 value 로 놓음
      Enter 를 눌러서 form 이 submit 되면 브라우저가 새로고침을 해버리고 state 를 잃게됨 => handleSubmit 에서 event.preventDefault() 로 새로고침을 막아줌!
      Input 값을 업데이트해주는 updateTerm 함수를 만들고 Input 에 onChange 가 생길때 실행
      onChange 가 생길때마다 value 가 업데이트되고 state 도 업데이트되면서 입력할 수 있게됨

      검색이후에 Home, TV 처럼 loading 과 데이터가 존재하는지 검증 이후에 Section 을 불러와서 화면을 띄워줌!
      - [x] Error Message
      오류가 나거나 검색결과가 없는 경우에 메세지를 표시해주고 싶음
      Message 컴포넌트를 만들고 오류일시, 검색결과 없을시 텍스트 색깔을 다르게 지정해주고 컨테이너 안에 텍스트를 넣어 표시해주는 형식으로 만들어줌
      Presenter 에서 error 가 존재한다면 해당 컴포넌트를 불러옴
      search Presenter 에서는 tvShowResult 와 movieResult 의 길이가 0 일때 검색결과를 찾을수 없다고 하는 텍스트를 보내서 출력!

- [x] Poster
      Poster 컴포넌트는 Movie, TV, Search 에서 출력되고 클릭하면 /movie:id, /show/:id 로 이동시킴
      그러기 위해서 Poster 컴포넌트는 id 가 필요하고, 포스터 이미지 url, 타이틀, 년도, 점수, 영화인지 TV 인지 알려주는 isMovie 들을 바탕으로 만들어짐
      Link 컴포넌트 안에 감싸는데 isMovie 에따라 movie, show 로 to 경로를 설정하고
      컨테이너 안에 포스터,타이틀,점수,년도 등을 집어넣어서 만들어 줌
      Presenter 에서 결과들을 불러온 후 .map 으로 Poster 컴포넌트들을 출력!
      필요한 props 를 주면서 출력하는데 year 에서 2018-10-03 중에 2018 만 빼오고싶음

      # substring
      substring 을 이용해서 년도만 쏙빼옴
      그런데 movie.release_date 가 null 인경우 .substring is not a function 오류가 발생할 수 있어서 일단 movie.release_date 가 있는지 확인한 후 실행하게 조건을 추가해줌
      TV 와 search 에도 마찬가지로 적용!

      # Style
      https://developers.themoviedb.org/3/getting-started/images
      를 보면 poster_path 에서 가져온 url 을 바로 사용하면 안되고 api 의 url 을 붙혀서 넣어줘야함

- [x] Detail Presenter
      DetailPresenter 에서 result 안의 backdrop_path 를 이용해서 화면뒤에 깔리는 backdrop 사진을 나오게 함
      Container, Backdrop, Cover 컨테이너를 만들고 Cover 컴포넌트에 포스터를 출력하기 위해서 bgImage 라는 props 에 poster_path 를 담아서 전달하고 CSS 로 background-image :url() 을 사용해서 출력
      Backdrop 의 z-index 를 0 으로 Cover 의 z-index 를 1 로하여 Cover 가 나오게 해줌
      span 은 margin 을 가지지 않음
      result 에 있는 것들을 바탕으로 데이터를 가져와서 뿌려주기!

## React Helmet

npm i reacthelmet
디테일로 갈때 페이지의 타이틀을 영화 이름으로 바꾸기
헬멧은 body 에 표시되지 않고 head 에 표시됨

# <Helmet>

      <title>Movies | Nomflix</title>

  </Helmet>
  Home, TV 에서는 로딩중일때, 로딩이 완료된 후에 다른 타이틀을 가지게하고
  Detial 페이지에서는 프로그램의 이름이 나오게 설정!
