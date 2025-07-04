import { Component } from "react";

// 외부에서 전달받는 props의 타입
type Props = {
  color: string;
};

// 컴포넌트 내부 상태 state의 타입
type State = {
  number: number;
  color: string | null;
};

class LifeCycleSample extends Component<Props, State> {
  state: State = {
    number: 0,
    color: null,
  };

  // DOM 참조용 ref
  myRef: HTMLHeadingElement | null = null;

  // 1. 생성자: 컴포넌트가 처음 만들어질 때 호출됨 (가장 먼저 호출)
  constructor(props: Props) {
    super(props);
    console.log("constructor");
  }

  // 2. props로부터 state 동기화
  // - 마운트 시, 업데이트 시 모두 호출됨
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  // 3. 컴포넌트가 화면에 처음 렌더링된 후 호출 (딱 한 번)
  componentDidMount(): void {
    console.log("componentDidMount");
  }

  // 4. 업데이트 여부 결정
  // - setState 또는 부모 props 변경 시 호출됨
  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    console.log("shouldComponentUpdate");
    return nextState.number % 10 !== 4; // number가 4의 배수이면 렌더링하지 않음
  }

  // 5. DOM에서 제거될 때 호출
  componentWillUnmount(): void {
    console.log("componentWillUnmount");
  }

  // 버튼 클릭 시 숫자를 1 증가
  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  // 6. 실제 DOM 변경 직전에 호출 (렌더 후 → 화면 반영 전 시점)
  // - DOM의 이전 상태를 기록하고 싶을 때 사용
  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color && this.myRef !== null) {
      return this.myRef.style.color; // 업데이트 직전의 색상
    }
    return null;
  }

  // 7. 컴포넌트가 업데이트되고 난 후 호출
  // - getSnapshotBeforeUpdate에서 반환한 snapshot을 세 번째 인자로 받음
  componentDidUpdate(prevProps: Props, prevState: State, snapshot?: any): void {
    console.log("componentDidUpdate");
    if (snapshot) {
      console.log("update 직전 : ", snapshot);
    }
  }

  // 8. 렌더링 함수
  // - 상태 또는 props가 바뀌면 다시 호출됨
  render() {
    console.log("render");

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1
          style={style}
          ref={(ref: HTMLHeadingElement | null): void => {
            this.myRef = ref;
          }}
        >
          {this.state.number}
        </h1>

        <p>color : {this.state.color}</p>

        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default LifeCycleSample;
