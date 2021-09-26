# 프로젝트 설정 명령어 및 BoilerPlate 코드 모음

## React
### 프로젝트 생성
```
1. yarn
yarn create react-app <app_name>

2. npm
npm init react-app <app_name>

3. npx
npx create-react-app <app_name>
```

## Prettier
### 익스텐션 설치
- Prettier 검색 후 인기 많은 것 선택 (Prettier-Code formatter)
### Template
- [해당 디렉토리 이동](./prettier-boilerplate)
### 사용법
- 프로젝트 Root에 해당 `.prettierrc` 파일을 붙여넣어 사용
- 윈도우 기준 `F1`키를 눌러 `Format Document` 검색 후 실행
- 여러가지 설정 속성들은 [공식 홈페이지](https://prettier.io/docs/en/options.html) 참고
### 저장 시 자동 Formatting
- 윈도우 기준 `File` -> `Preferences` -> `Settings` 이동
- 검색 창에서 `Format On Save` 검색 후 토글 활성화


## Immer
### 용도
- 객체나 배열의 상태관리에서 불변성을 위해 사용한다.
- 기존의 객체나 배열은 그대로두고 새로운 것을 반환한다.
### 설치
```
1. yarn
yarn add immer
```

### 일반적인 import
```jsx
import produce from 'immer';
```

### 기본 사용법
```jsx
const newState = produce(oldState, draft => {
    draft.push({
        name: 'lee',
        age: 27
    });
});
```

## ESLint
- create-react-app으로 만들어진 프로젝트는 기본적으로 ESLint가 도입되어 있다.
### 익스텐션 설치
- 마켓플레이스에서 `ESLint` 검색 후 설치
- 코드 내부에서 Lint 확인하고 싶을 때 설치한다.
### 저장 시 자동 코드 수정
- 윈도우 기준 `File` -> `Preferences` -> `Settings` 이동
- 검색 창에서 `ESLint Auto Fix On Save` 검색 후 토글 활성화
### Prettier 충돌 방지
- 둘 사이의 중복된 규칙으로 인한 중복 포맷팅 방지
```
yarn add eslint-config-prettier
```
- package.json 수정
```json
...

"eslintConfig" : {
	"extends": [
		"react-app",
		"prettier"
	]
}

...
```
### 규칙 수정
```json
// warn-levgl 
// 0: 경고가 아예 안생김 
// 1: 노란 경고 
// 2: 빨간 경고
"eslintConfig" : {
	"extends": [
		...
	],
	"rules": {
		"<es-lint-rules>": <warn-level>
	}
}
```
- ESLint 설정 규칙 목록은 [공식 홈페이지](https://eslint.org/docs/rules/)를 참고한다.


## Snippet
### 용도
- 자주 사용하는 코드 템플릿 제작
### 템플릿 제작
- 원하는 템플릿 코드 작성
- [해당 사이트](https://snippet-generator.app/) 이동
- `Your Snippet` 란에 작성 코드 붙여넣기
- `Tab trigger` 란에 단축키 작성하기
- `스니펫 코드` 생성
### Snippet 등록
- 윈도우 기준 `File` -> `Preferences` -> `User Snippets` 클릭
- `javascriptreact.js` 선택
- 변환했던 스니펫 코드를 옮겨주면 된다.


## Sass / Scss
### 설치
```
1. yarn
yarn add sass
```

## classnames
### 설치
```
1. yarn
yarn add classnames
```
### 일반적인 import
```jsx
import classNames from 'classnames';
```
### 사용법
- false, null, 0, undefined 와 같은 falsy 값들이 내부에 들어오면 무시된다.
- 객체나 배열의 형태로도 들어올 수 있다.
```jsx
function Button({ size })
<button className={classNames('Button', size)}></button>
```

## CSS Module
### 용도
- CSS의 클래스 네임이 중복되는 것을 완전히 막을 수 있음
- CSS 파일을 Local로 관리하기 때문에 다른 파일의 CSS 네이밍에 영향을 받지 않는다.
### 설치
- create-react-app으로 만들어진 프로젝트에서 별도로 설치 할 필요는 없다.
### 파일명
- 파일명 작성을 `.module.css` 형식으로 한다.
- scss에서도 사용 가능하다. 확장자만 scss로 바꿔주면 된다.
### import
```jsx
import styles from './Box.module.css';
```
### 사용법
```jsx
<div className={styles.Box}></div>
```
### classnames 라이브러리와 함께 사용하기
- 아래의 코드처럼 설정해두면 클래스를 불러올 때 마다 `styles.`를 붙일 필요가 없다.
```jsx
import styles from './Box.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

<div className={cx('box', color)}></div>
```


## MySQL
### 설치 (리눅스)
```
sudo apt-get install -y mysql-server
```
### LocalHost / root 로그인
- 윈도우 : MySQL/MySQL Server 8.0/bin 디렉토리에서 실행
- 리눅스에서는 어떤 곳에서나 해도 괜찮다.
```
mysql -h localhost -u root -p
Enter password: <password>
```
### 데이터베이스 생성 및 작업 환경으로 지정
```
CREATE SCHEMA `<db_name>` DEFAULT CHARACTER SET utf8mb4;
USE <db_name>;
```
### 프로젝트와 연동
1. MySQL 통신 모듈 준비

    ```
    1. npm
    npm install mysql
    ```
2. db 파일 생성 및 connection 코드 작성
    ```jsx
    const connection = mysql.createConnection({
        host: 'db_hostname',
        user: 'db_id',
        password: 'db_password',
        port: port_num,
        database: 'db_name'
    })
    ```
3. connection을 이용한 코드 작성
    ```jsx
    connection.query(`QUERY`, (err, rows, fields) => {
        if(err) {
            // error handling
        }
        else {
            // works
        }
    })
    ```

## react-devtools
- 웹 브라우저 익스텐션으로 설치 가능
- `react developer tools` 설치
- 설치 후 개발자도구 접속 시 React 분석 도구들이 존재함을 확인 가능
### 렌더링 확인
- `View Settings` (일반적으로 우측 상단 톱니바퀴) 의 `General` 탭 이동
- `Highlight updates when components render` 토글 활성화
- State가 바뀌어 렌더링 될 때 마다 어느 컴포넌트들이 렌더링 되는지 확인할 수 있다.

## Express

## Babel

## Webpack
### Template
- [해당 디렉토리 이동](./webpack-boilerplate)