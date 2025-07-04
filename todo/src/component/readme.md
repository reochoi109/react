라이프사이클

마운트, 업데이트, 언마운트

- 마운트 : DOM 생성되고, 웹 브라우저 상에 나타나는 것을 마운트라고 한다.
  이때 호출 하는 메서드는 다음과 같다.

1. 컴포넌트 만듬
2. constructor : 생성자 메서드
3. getDerivedStateFromProps: props에 있는 값을 state에 넣을 때 사용되는 메서드
4. render: 준비한 ui 렌더링하는 메서드
5. componentDidMount: 컴포넌트가 웹브라우저상에 나타난 후 호출하는 메서드

- 업데이트
  컴포넌트는 다음과 같은 총 네 가지 경우에 업데이트 한다.

1. props 변경 시
2. state 변경 시
3. 부모 컴포넌트가 렌더링 될 때
4. this.forceUpdate로 강제로 렌더링을 트리거 할 경우.

위 조건 충족 시

getDerivedStateFromProps : 마운트 과정에서도 호출 되며, 업데이트가 시작하기 전에도 호출 된다. props의 변화에 따라 state 값에도 변화를 주고 싶을 때 사용 된다.
shouldComponentUpdate : 컴포넌트가 렌더링 될 지 말지 결정하느 메서드,
render : 컴포넌트 렌더링
getSnapShotBeforeUpdate : 컴포넌트 변화를 dom 에 반영하기 바로 직전에 호출하는 메서드
componentDidUpdate : 컴포넌트 업데이트 작업이 끝난 후 호출되는 메서드

- 언마운트
  마운트의 반대 과정, 즉 컴포넌트를 DOM에서 제거하는 것을 언마운트라고 한다.

componentWillUnmount : 컴포넌트가 웹 브라우저 상에서 사라지기 전에 호출하는 메서드

### 마운트 순서

1. constructor
2. getDerivedStateFromProps
3. render
4. componentDidMount

### 업데이트 순서

1. getDerivedStateFromProps
2. shouldComponentUpdate
3. render
4. getSnapshotBeforeUpdate
5. componentDidUpdate

### 버튼을 눌렀을 때 흐름 예시

handleClick → setState

→ getDerivedStateFromProps

→ shouldComponentUpdate (예: number가 4의 배수면 false)

→ render

→ getSnapshotBeforeUpdate

→ 화면 갱신

→ componentDidUpdate
